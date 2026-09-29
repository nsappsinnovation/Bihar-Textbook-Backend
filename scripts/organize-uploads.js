/**
 * One-time move of existing uploads into their content folders (uploads/notices, uploads/tenders, ...)
 * and rewrite of the stored paths to "/api/uploads/<folder>/<file>".
 *
 *   npm run organize-uploads            → dry run, prints the plan and changes nothing
 *   npm run organize-uploads -- --apply → moves the files and updates the database
 *
 * Run it from the backend folder (where uploads/ lives), ideally after a database backup.
 */
import { existsSync, readdirSync, rmSync } from "node:fs";
import { rename } from "node:fs/promises";
import path from "node:path";
import prisma from "../src/config/db.js";
import {
  DIRECTORY_UPLOAD_FOLDERS,
  SECTION_UPLOAD_FOLDERS,
  SETTING_UPLOAD_FOLDERS,
  UPLOADS_DIRECTORY,
  UPLOADS_URL_PREFIX,
  noticeUploadFolder,
  uploadRelativePath,
} from "../src/middlewares/uploads.js";

const APPLY = process.argv.includes("--apply");
const LEGACY_FOLDERS = ["images", "documents", "videos"];
const UPLOAD_URL_PATTERN = /(?:\/api)?\/uploads\/[^\s"'()<>\\]+/g;

// relative path now → folder it should live in (first row that references a file decides)
const moves = new Map();
// { apply: async (tx) => ..., describe } for every row that needs its path rewritten
const updates = [];
const missing = [];

const targetUrl = (relativePath) => `${UPLOADS_URL_PREFIX}${moves.get(relativePath)}/${path.basename(relativePath)}`;

// Registers a stored URL. Returns the URL it should become, or null when nothing changes.
const plan = (url, folder, where) => {
  const relativePath = uploadRelativePath(url);
  if (!relativePath) return null;
  if (!existsSync(path.resolve(UPLOADS_DIRECTORY, relativePath))) {
    missing.push(`${where}: ${url}`);
    return null;
  }
  if (!moves.has(relativePath)) moves.set(relativePath, folder);
  const next = targetUrl(relativePath);
  return next === url ? null : next;
};

const planColumn = (rows, model, field, folderOf, label) => {
  for (const row of rows) {
    const next = plan(row[field], folderOf(row), `${label} #${row.id}.${field}`);
    if (next) {
      updates.push({
        describe: `${label} #${row.id}.${field}: ${row[field]} → ${next}`,
        apply: (tx) => tx[model].update({ where: { id: row.id }, data: { [field]: next } }),
      });
    }
  }
};

const main = async () => {
  const [notices, books, chapters, directory, sections, settings, admins, mdMessages] = await Promise.all([
    prisma.notice.findMany({ select: { id: true, type: true, category: true, documentUrl: true } }),
    prisma.book.findMany({ select: { id: true, coverImageUrl: true } }),
    prisma.bookChapter.findMany({ select: { id: true, pdfUrl: true } }),
    prisma.directory.findMany({ select: { id: true, type: true, photoUrl: true } }),
    prisma.section.findMany({ select: { id: true, module: true, imageUrl: true, documentUrl: true, videoUrl: true } }),
    prisma.setting.findMany({ select: { id: true, settingKey: true, settingValue: true } }),
    prisma.admin.findMany({ select: { id: true, avatarUrl: true } }),
    prisma.managingDirectorMessage.findMany({ select: { id: true, photoUrl: true } }),
  ]);

  planColumn(notices, "notice", "documentUrl", (r) => noticeUploadFolder(r.type, r.category), "notice");
  planColumn(books, "book", "coverImageUrl", () => "books/covers", "book");
  planColumn(chapters, "bookChapter", "pdfUrl", () => "books/chapters", "chapter");
  planColumn(directory, "directory", "photoUrl", (r) => DIRECTORY_UPLOAD_FOLDERS[r.type] || "others", "directory");
  for (const field of ["imageUrl", "documentUrl", "videoUrl"]) {
    planColumn(sections, "section", field, (r) => SECTION_UPLOAD_FOLDERS[r.module] || "others", "section");
  }
  planColumn(admins, "admin", "avatarUrl", () => "admins", "admin");
  planColumn(mdMessages, "managingDirectorMessage", "photoUrl", () => "md-message", "md message");

  // Settings hold a path directly (csr_policy_doc) or inside JSON (md_message.photo, csr_policy_content.pdfUrl)
  for (const setting of settings) {
    if (!setting.settingValue) continue;
    const folder = SETTING_UPLOAD_FOLDERS[setting.settingKey] || "others";
    const value = setting.settingValue.replace(UPLOAD_URL_PATTERN, (url) =>
      plan(url, folder, `setting ${setting.settingKey}`) || url,
    );
    if (value !== setting.settingValue) {
      updates.push({
        describe: `setting ${setting.settingKey}: upload paths rewritten`,
        apply: (tx) => tx.setting.update({ where: { id: setting.id }, data: { settingValue: value } }),
      });
    }
  }

  const fileMoves = [...moves]
    .map(([relativePath, folder]) => ({
      from: path.resolve(UPLOADS_DIRECTORY, relativePath),
      to: path.resolve(UPLOADS_DIRECTORY, folder, path.basename(relativePath)),
      label: `${relativePath} → ${folder}/`,
    }))
    .filter((m) => m.from !== m.to);

  console.log(`\nFiles to move (${fileMoves.length}):`);
  fileMoves.forEach((m) => console.log(`  ${m.label}`));
  console.log(`\nDatabase rows to update (${updates.length}):`);
  updates.forEach((u) => console.log(`  ${u.describe}`));
  if (missing.length) {
    console.log(`\nReferenced files not found on disk, left unchanged (${missing.length}):`);
    missing.forEach((m) => console.log(`  ${m}`));
  }

  const referenced = new Set(moves.keys());
  const orphans = LEGACY_FOLDERS.flatMap((dir) => {
    const full = path.resolve(UPLOADS_DIRECTORY, dir);
    return existsSync(full) ? readdirSync(full).filter((f) => !f.startsWith(".")).map((f) => `${dir}/${f}`) : [];
  }).filter((f) => !referenced.has(f));
  if (orphans.length) {
    console.log(`\nFiles in old folders that no row references, left in place (${orphans.length}):`);
    orphans.forEach((f) => console.log(`  ${f}`));
  }

  if (!APPLY) {
    console.log("\nDry run — nothing changed. Re-run with --apply to move files and update the database.");
    return;
  }

  const done = [];
  try {
    for (const m of fileMoves) {
      await rename(m.from, m.to);
      done.push(m);
    }
    await prisma.$transaction(
      async (tx) => {
        for (const u of updates) await u.apply(tx);
      },
      { timeout: 60000 },
    );
  } catch (error) {
    console.error("\nFailed — moving files back:", error.message);
    for (const m of done.reverse()) await rename(m.to, m.from).catch(() => {});
    process.exitCode = 1;
    return;
  }

  // Drop old type folders once they are empty
  for (const dir of LEGACY_FOLDERS) {
    const full = path.resolve(UPLOADS_DIRECTORY, dir);
    if (existsSync(full) && readdirSync(full).filter((f) => f !== ".DS_Store").length === 0) {
      rmSync(full, { recursive: true });
    }
  }
  console.log(`\nDone: moved ${fileMoves.length} files, updated ${updates.length} rows.`);
};

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
