import { rename, unlink } from "node:fs/promises";
import prisma from "../config/db.js";
import { getLocalUploadPath, moveUploadToFolder, noticeUploadFolder, toUploadUrl } from "../middlewares/uploads.js";
import logger from "../utils/logger.js";

const createdBy = {
  select: { id: true, fullName: true },
};

const removeLocalDocument = async (documentUrl) => {
  const filepath = getLocalUploadPath(documentUrl);
  if (!filepath) return;

  try {
    await unlink(filepath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      logger.warn({ err: error, filepath }, "Could not remove notice document");
    }
  }
};

// e.g. "/api/uploads/notices/123-abc.pdf"
const getUploadedDocumentUrl = (file) => (file ? toUploadUrl(file) : undefined);

// Puts the notice's document in notices/, circulars/ or tenders/ to match its type and category.
// Returns { url, undo } — undo() moves the file back if the database write fails.
const placeNoticeDocument = async (documentUrl, type, category) => {
  const originalPath = getLocalUploadPath(documentUrl);
  const url = await moveUploadToFolder(documentUrl, noticeUploadFolder(type, category));
  const undo = async () => {
    if (url === documentUrl || !originalPath) return;
    await rename(getLocalUploadPath(url), originalPath).catch((err) =>
      logger.warn({ err, url }, "Could not move notice document back"),
    );
  };
  return { url, undo };
};

const toDate = (value) => (value ? new Date(`${value}T00:00:00.000Z`) : null);

// Today's date in India, in the same midnight-UTC form as the stored DATE columns
const todayDate = () => toDate(new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }));

// A tender is active until its closing date has passed; without a closing date it is not active
const withStatus = (notice) => ({
  ...notice,
  isActive: notice.type === "Tender" && !!notice.closingDate && notice.closingDate >= todayDate(),
});

// GET /api/notices
export const getNotices = async (req, res) => {
  try {
    const { type, category, isPinned, status, page = "1", limit = "10" } = req.query;
    const pageNumber = Math.max(Number.parseInt(page, 10) || 1, 1);
    const pageSize = Math.min(
      Math.max(Number.parseInt(limit, 10) || 10, 1),
      1000,
    );

    if (type && !["Notice", "Tender"].includes(type)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid notice type" });
    }
    if (isPinned && !["true", "false"].includes(isPinned)) {
      return res
        .status(400)
        .json({ success: false, message: "isPinned must be true or false" });
    }
    if (status && !["active", "closed"].includes(status)) {
      return res
        .status(400)
        .json({ success: false, message: "status must be active or closed" });
    }

    const today = todayDate();
    const where = {
      ...(type && { type }),
      ...(category && { category }),
      ...(isPinned && { isPinned: isPinned === "true" }),
      ...(status === "active" && { type: "Tender", closingDate: { gte: today } }),
      ...(status === "closed" && { OR: [{ closingDate: null }, { closingDate: { lt: today } }] }),
    };
    const [notices, totalItems] = await Promise.all([
      prisma.notice.findMany({
        where,
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy: [
          { isPinned: "desc" },
          { publishDate: "desc" },
          { createdAt: "desc" },
        ],
        include: { createdBy },
      }),
      prisma.notice.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: notices.map(withStatus),
      pagination: {
        totalItems,
        totalPages: Math.ceil(totalItems / pageSize),
        currentPage: pageNumber,
        itemsPerPage: pageSize,
      },
    });
  } catch (error) {
    logger.error({ err: error }, "Error fetching notices");
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error while fetching notices",
      });
  }
};

// GET /api/notices/:id
export const getNoticeById = async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const notice = await prisma.notice.findUnique({
      where: { id },
      include: { createdBy },
    });

    if (!notice) {
      return res
        .status(404)
        .json({ success: false, message: "Notice not found" });
    }

    return res.status(200).json({ success: true, data: withStatus(notice) });
  } catch (error) {
    logger.error(
      { err: error, noticeId: req.params.id },
      "Error fetching notice",
    );
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error while fetching notice",
      });
  }
};

// POST /api/notices
export const createNotice = async (req, res) => {
  try {
    const {
      title,
      description,
      type,
      category,
      isPinned,
      documentUrl,
      publishDate,
      closingDate,
    } = req.body;
    const uploadedDocumentUrl = getUploadedDocumentUrl(req.file);
    const placed = await placeNoticeDocument(uploadedDocumentUrl || documentUrl || null, type || "Notice", category);
    let notice;
    try {
      notice = await prisma.notice.create({
        data: {
          title,
          description: description || null,
          type: type || "Notice",
          category: category || null,
          isPinned: isPinned ?? false,
          documentUrl: placed.url,
          publishDate: toDate(publishDate),
          closingDate: toDate(closingDate),
          createdById: req.user.id,
        },
        include: { createdBy },
      });
    } catch (dbError) {
      await placed.undo();
      throw dbError;
    }

    logger.info(
      { noticeId: notice.id, adminId: req.user.id },
      "Notice created successfully",
    );
    return res
      .status(201)
      .json({
        success: true,
        message: "Notice created successfully",
        data: withStatus(notice),
      });
  } catch (error) {
    await removeLocalDocument(getUploadedDocumentUrl(req.file));
    logger.error({ err: error }, "Error creating notice");
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error while creating notice",
      });
  }
};

// PUT /api/notices/:id
export const updateNotice = async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const existingNotice = await prisma.notice.findUnique({ where: { id } });
    if (!existingNotice) {
      await removeLocalDocument(getUploadedDocumentUrl(req.file));
      return res
        .status(404)
        .json({ success: false, message: "Notice not found" });
    }

    const {
      title,
      description,
      type,
      category,
      isPinned,
      documentUrl,
      publishDate,
      closingDate,
    } = req.body;
    const uploadedDocumentUrl = getUploadedDocumentUrl(req.file);
    const data = {};
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description || null;
    if (type !== undefined) data.type = type;
    if (category !== undefined) data.category = category || null;
    if (isPinned !== undefined) data.isPinned = isPinned;
    if (uploadedDocumentUrl) data.documentUrl = uploadedDocumentUrl;
    else if (documentUrl !== undefined) data.documentUrl = documentUrl || null;
    if (publishDate !== undefined) data.publishDate = toDate(publishDate);
    if (closingDate !== undefined) data.closingDate = toDate(closingDate);

    // The validator only sees the dates sent in this request, so check against the stored ones too
    const finalPublish = data.publishDate !== undefined ? data.publishDate : existingNotice.publishDate;
    const finalClosing = data.closingDate !== undefined ? data.closingDate : existingNotice.closingDate;
    if (finalPublish && finalClosing && finalClosing < finalPublish) {
      await removeLocalDocument(uploadedDocumentUrl);
      return res
        .status(400)
        .json({ success: false, message: "Closing date cannot be before the publish date" });
    }

    // A changed type/category (e.g. Notice → Circular) also moves the document to the matching folder
    const documentReplaced =
      data.documentUrl !== undefined &&
      data.documentUrl !== existingNotice.documentUrl;
    const placed = await placeNoticeDocument(
      data.documentUrl !== undefined ? data.documentUrl : existingNotice.documentUrl,
      data.type ?? existingNotice.type,
      data.category !== undefined ? data.category : existingNotice.category,
    );
    if (placed.url !== (data.documentUrl ?? existingNotice.documentUrl)) data.documentUrl = placed.url;

    let notice;
    try {
      notice = await prisma.notice.update({
        where: { id },
        data,
        include: { createdBy },
      });
    } catch (dbError) {
      await placed.undo();
      throw dbError;
    }

    if (documentReplaced) {
      await removeLocalDocument(existingNotice.documentUrl);
    }

    logger.info(
      { noticeId: id, adminId: req.user.id },
      "Notice updated successfully",
    );
    return res
      .status(200)
      .json({
        success: true,
        message: "Notice updated successfully",
        data: withStatus(notice),
      });
  } catch (error) {
    await removeLocalDocument(getUploadedDocumentUrl(req.file));
    logger.error(
      { err: error, noticeId: req.params.id },
      "Error updating notice",
    );
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error while updating notice",
      });
  }
};

// DELETE /api/notices/:id
export const deleteNotice = async (req, res) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const notice = await prisma.notice.findUnique({ where: { id } });
    if (!notice) {
      return res
        .status(404)
        .json({ success: false, message: "Notice not found" });
    }

    await prisma.notice.delete({ where: { id } });
    await removeLocalDocument(notice.documentUrl);

    logger.info(
      { noticeId: id, adminId: req.user.id },
      "Notice deleted successfully",
    );
    return res
      .status(200)
      .json({ success: true, message: "Notice deleted successfully" });
  } catch (error) {
    logger.error(
      { err: error, noticeId: req.params.id },
      "Error deleting notice",
    );
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server error while deleting notice",
      });
  }
};
