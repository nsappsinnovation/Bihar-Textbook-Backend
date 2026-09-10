// One-time import of the website content that used to live in the frontend.
// Run with:  npm run seed
// Safe to re-run: each group is skipped if it already has rows.
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();
const DATA_DIR = path.resolve("prisma/seed-data");

const load = (name) => JSON.parse(fs.readFileSync(path.join(DATA_DIR, `${name}.json`), "utf8"));

// "22/06/2026" -> Date (UTC midnight, so the stored DATE doesn't shift by timezone).
// Anything that is not a real date (e.g. "25/26/3033", a session + letter number) -> null.
const fromDdMmYyyy = (value) => {
  const [d, m, y] = String(value || "").split("/").map(Number);
  const isValid = d >= 1 && d <= 31 && m >= 1 && m <= 12 && y >= 1990 && y <= 2100;
  return isValid ? new Date(Date.UTC(y, m - 1, d)) : null;
};

// "October 15, 2025" -> Date (UTC midnight)
const fromLongDate = (value) => {
  const date = new Date(value);
  return isNaN(date) ? null : new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
};

// Runs `insert` only when `count` is 0, and logs what happened
const seedGroup = async (label, count, insert) => {
  if ((await count()) > 0) {
    console.log(`- ${label}: already has data, skipped`);
    return;
  }
  const result = await insert();
  console.log(`+ ${label}: ${result.count} rows`);
};

const seedSetting = async (key, value, category) => {
  const existing = await prisma.setting.findUnique({ where: { settingKey: key } });
  if (existing) {
    console.log(`- setting ${key}: already exists, skipped`);
    return;
  }
  await prisma.setting.create({
    data: {
      settingKey: key,
      settingValue: typeof value === "string" ? value : JSON.stringify(value),
      category,
    },
  });
  console.log(`+ setting ${key}`);
};

async function main() {
  // ---- Books ----
  const bookRows = load("books").classes.flatMap((cls) =>
    (cls.books || []).map((book, index) => ({
      title: book.title,
      classId: cls.id,
      subject: book.subject || "General",
      board: "Bihar Board",
      coverImageUrl: book.image || null,
      status: book.localOnly ? "Draft" : "Published",
      sortOrder: index,
    }))
  );
  await seedGroup("books", () => prisma.book.count(), () => prisma.book.createMany({ data: bookRows }));

  // ---- Notices & Tenders ----
  const noticeRows = load("notices").map((n) => ({
    title: n.title,
    type: "Notice",
    category: n.category || "Notice",
    documentUrl: n.link || null,
    publishDate: fromDdMmYyyy(n.date),
  }));
  await seedGroup(
    "notices",
    () => prisma.notice.count({ where: { type: "Notice" } }),
    () => prisma.notice.createMany({ data: noticeRows })
  );

  const tenderRows = load("tenders").map((t) => ({
    title: t.title,
    type: "Tender",
    category: t.category || "Tender",
    documentUrl: t.link || null,
    publishDate: fromDdMmYyyy(t.date),
  }));
  await seedGroup(
    "tenders",
    () => prisma.notice.count({ where: { type: "Tender" } }),
    () => prisma.notice.createMany({ data: tenderRows })
  );

  // ---- Directory (leaders, board, past MDs, employees) ----
  const directoryGroups = {
    leader: load("leaders").map((l, i) => ({ name: l.name, designation: l.role, photoUrl: l.image, sortOrder: i })),
    board_member: load("boardMembers").map((b, i) => ({
      name: b.name,
      designation: b.designation,
      tenureFrom: b.from,
      status: b.status || "Active",
      sortOrder: i,
    })),
    past_md: load("pastMds").map((m, i) => ({ name: m.name, tenureFrom: m.from, tenureTo: m.to, sortOrder: i })),
    employee: load("employees").map((e, i) => ({
      name: e.name,
      designation: e.designation,
      department: e.department,
      tag: e.type, // Regular / Contract / Outsource
      sortOrder: i,
    })),
  };
  for (const [type, rows] of Object.entries(directoryGroups)) {
    await seedGroup(
      `directory ${type}`,
      () => prisma.directory.count({ where: { type } }),
      () => prisma.directory.createMany({ data: rows.map((row) => ({ ...row, type })) })
    );
  }

  // ---- Sections (gallery, press, missions) ----
  const sectionGroups = {
    "gl-photo": load("photos").map((p, i) => ({ title: p.alt, imageUrl: p.src, sortOrder: i })),
    "gl-video": load("videos").map((v, i) => ({ title: v.alt, imageUrl: v.src, videoUrl: v.videoUrl, sortOrder: i })),
    "gl-press": load("press").map((p, i) => ({
      title: p.title,
      description: p.excerpt,
      category: p.category,
      imageUrl: p.image,
      publishDate: fromLongDate(p.date),
      sortOrder: i,
    })),
    // Tools & Resources grid on the home page; category holds the card accent colour
    tr: load("missions").map((m, i) => ({
      title: m.title,
      description: m.desc,
      imageUrl: m.image,
      link: m.link,
      category: m.accent,
      sortOrder: i,
    })),
  };
  for (const [module, rows] of Object.entries(sectionGroups)) {
    await seedGroup(
      `section ${module}`,
      () => prisma.section.count({ where: { module } }),
      () => prisma.section.createMany({ data: rows.map((row) => ({ ...row, module })) })
    );
  }

  // ---- Settings (single documents) ----
  await seedSetting("dc-rti", load("rti"), "Documents");
  await seedSetting("md_message", load("mdMessage"), "KnowUs");
  await seedSetting("csr_policy_content", load("csrPolicy"), "CSR");
  await seedSetting("csr_policy_doc", load("csrPolicy").pdfUrl || "/csr-policy.pdf", "CSR");
  await seedSetting("printer_registry_doc", "/printer.pdf", "Printers");
  await seedSetting("site_config", { siteName: "BSTBPC Admin Portal", supportEmail: "support@bstbpc.gov.in" }, "System");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
