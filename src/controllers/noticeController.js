import { unlink } from "node:fs/promises";
import path from "node:path";
import prisma from "../config/db.js";
import { UPLOADS_DIRECTORY } from "../middlewares/uploads.js";
import logger from "../utils/logger.js";

const createdBy = {
  select: { id: true, fullName: true },
};

const getLocalDocumentPath = (documentUrl) => {
  if (!documentUrl?.startsWith("/uploads/")) return null;

  const filepath = path.resolve(UPLOADS_DIRECTORY, documentUrl.slice("/uploads/".length));
  return filepath.startsWith(`${UPLOADS_DIRECTORY}${path.sep}`)
    ? filepath
    : null;
};

const removeLocalDocument = async (documentUrl) => {
  const filepath = getLocalDocumentPath(documentUrl);
  if (!filepath) return;

  try {
    await unlink(filepath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      logger.warn({ err: error, filepath }, "Could not remove notice document");
    }
  }
};

// e.g. "/uploads/documents/123-abc.pdf"
const getUploadedDocumentUrl = (file) =>
  file
    ? `/uploads/${path.relative(UPLOADS_DIRECTORY, file.path).split(path.sep).join("/")}`
    : undefined;

const toDate = (value) => (value ? new Date(`${value}T00:00:00.000Z`) : null);

// GET /api/notices
export const getNotices = async (req, res) => {
  try {
    const { type, category, isPinned, page = "1", limit = "10" } = req.query;
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

    const where = {
      ...(type && { type }),
      ...(category && { category }),
      ...(isPinned && { isPinned: isPinned === "true" }),
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
      data: notices,
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

    return res.status(200).json({ success: true, data: notice });
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
    } = req.body;
    const uploadedDocumentUrl = getUploadedDocumentUrl(req.file);
    const notice = await prisma.notice.create({
      data: {
        title,
        description: description || null,
        type: type || "Notice",
        category: category || null,
        isPinned: isPinned ?? false,
        documentUrl: uploadedDocumentUrl || documentUrl || null,
        publishDate: toDate(publishDate),
        createdById: req.user.id,
      },
      include: { createdBy },
    });

    logger.info(
      { noticeId: notice.id, adminId: req.user.id },
      "Notice created successfully",
    );
    return res
      .status(201)
      .json({
        success: true,
        message: "Notice created successfully",
        data: notice,
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

    const notice = await prisma.notice.update({
      where: { id },
      data,
      include: { createdBy },
    });

    if (
      data.documentUrl !== undefined &&
      data.documentUrl !== existingNotice.documentUrl
    ) {
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
        data: notice,
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
