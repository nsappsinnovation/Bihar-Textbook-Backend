import { unlink } from "node:fs/promises";
import prisma from "../config/db.js";
import { getLocalUploadPath, toUploadUrl, uploadUrlVariants } from "../middlewares/uploads.js";
import logger from "../utils/logger.js";

/**
 * Helper to construct relative public URL from uploaded Multer file
 */
const buildFileResponse = (file) => {
  const relativePath = toUploadUrl(file);
  return {
    path: relativePath,
    url: relativePath,
    filename: file.filename,
    mimeType: file.mimetype,
    size: file.size,
  };
};

/**
 * POST /api/uploads/image
 * Reusable image upload endpoint (Admin only)
 */
export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file uploaded under 'file' field",
      });
    }

    return res.status(201).json({
      success: true,
      data: buildFileResponse(req.file),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/uploads/document
 * Reusable document upload endpoint (Admin only)
 */
export const uploadDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No document file uploaded under 'file' field",
      });
    }

    return res.status(201).json({
      success: true,
      data: buildFileResponse(req.file),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/uploads/video
 * Reusable MP4 video upload endpoint (Admin only)
 */
export const uploadVideo = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No video file uploaded under 'file' field",
      });
    }

    return res.status(201).json({
      success: true,
      data: buildFileResponse(req.file),
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/uploads
 * Delete unreferenced file from storage (Admin only)
 */
export const deleteUpload = async (req, res, next) => {
  try {
    const { path: reqPath } = req.body;

    // Resolve inside UPLOADS_DIRECTORY; null means path traversal outside the upload root
    const absolutePath = getLocalUploadPath(reqPath);
    if (!absolutePath) {
      return res.status(400).json({
        success: false,
        message: "Invalid file path or directory traversal attempt",
      });
    }

    // Check all models in parallel for references to this path (new "/api/uploads/" and legacy "/uploads/" forms)
    const urls = uploadUrlVariants(reqPath);
    const mdMessagePromise = prisma.managingDirectorMessage
      ? prisma.managingDirectorMessage.count({ where: { photoUrl: { in: urls } } })
      : Promise.resolve(0);

    const [
      adminRef,
      bookRef,
      chapterRef,
      noticeRef,
      mdMessageRef,
      sectionRef,
      settingRef,
    ] = await Promise.all([
      prisma.admin.count({ where: { avatarUrl: { in: urls } } }),
      prisma.book.count({ where: { coverImageUrl: { in: urls } } }),
      prisma.bookChapter.count({ where: { pdfUrl: { in: urls } } }),
      prisma.notice.count({ where: { documentUrl: { in: urls } } }),
      mdMessagePromise,
      prisma.section.count({
        where: {
          OR: [
            { imageUrl: { in: urls } },
            { documentUrl: { in: urls } },
            { videoUrl: { in: urls } },
          ],
        },
      }),
      prisma.setting.count({
        where: {
          OR: urls.map((url) => ({ settingValue: { contains: url } })),
        },
      }),
    ]);

    const totalReferences =
      adminRef +
      bookRef +
      chapterRef +
      noticeRef +
      mdMessageRef +
      sectionRef +
      settingRef;

    if (totalReferences > 0) {
      return res.status(409).json({
        success: false,
        message: "Cannot delete file because it is referenced in the database",
      });
    }

    // Delete file from disk
    try {
      await unlink(absolutePath);
    } catch (err) {
      if (err.code === "ENOENT") {
        return res.status(404).json({
          success: false,
          message: "File not found on disk",
        });
      }
      logger.warn({ err, absolutePath }, "Could not delete uploaded file");
      throw err;
    }

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
