import { unlink } from "node:fs/promises";
import path from "node:path";
import prisma from "../config/db.js";
import { UPLOADS_DIRECTORY } from "../middlewares/uploads.js";
import logger from "../utils/logger.js";

/**
 * Helper to construct relative public URL from uploaded Multer file
 */
const buildFileResponse = (file) => {
  let subfolder = "";
  if (file.destination.endsWith("images")) subfolder = "images/";
  else if (file.destination.endsWith("documents")) subfolder = "documents/";
  else if (file.destination.endsWith("videos")) subfolder = "videos/";

  const relativePath = `/uploads/${subfolder}${file.filename}`;
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

    // Remove leading /uploads/ to resolve inside UPLOADS_DIRECTORY
    const relativeSubPath = reqPath.replace(/^\/uploads\//, "");
    const absolutePath = path.resolve(UPLOADS_DIRECTORY, relativeSubPath);

    // Prevent path traversal outside configured upload root
    if (!absolutePath.startsWith(`${UPLOADS_DIRECTORY}${path.sep}`) && absolutePath !== UPLOADS_DIRECTORY) {
      return res.status(400).json({
        success: false,
        message: "Invalid file path or directory traversal attempt",
      });
    }

    // Check all models in parallel for references to this path
    const mdMessagePromise = prisma.managingDirectorMessage
      ? prisma.managingDirectorMessage.count({ where: { photoUrl: reqPath } })
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
      prisma.admin.count({ where: { avatarUrl: reqPath } }),
      prisma.book.count({ where: { coverImageUrl: reqPath } }),
      prisma.bookChapter.count({ where: { pdfUrl: reqPath } }),
      prisma.notice.count({ where: { documentUrl: reqPath } }),
      mdMessagePromise,
      prisma.section.count({
        where: {
          OR: [
            { imageUrl: reqPath },
            { documentUrl: reqPath },
            { videoUrl: reqPath },
          ],
        },
      }),
      prisma.setting.count({
        where: {
          settingValue: { contains: reqPath },
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
