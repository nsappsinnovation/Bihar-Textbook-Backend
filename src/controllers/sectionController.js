import { unlink } from "node:fs/promises";
import path from "node:path";
import prisma from "../config/db.js";
import { UPLOADS_DIRECTORY } from "../middlewares/uploads.js";
import logger from "../utils/logger.js";
import { ALLOWED_SECTION_MODULES } from "../validators/sectionValidators.js";

const createdBySelect = {
  select: { id: true, fullName: true, email: true },
};

/**
 * Resolves safe local filesystem path for files uploaded under /uploads/
 */
const getLocalFilePath = (fileUrl) => {
  if (!fileUrl || typeof fileUrl !== "string" || !fileUrl.startsWith("/uploads/")) {
    return null;
  }
  const relativePath = fileUrl.slice("/uploads/".length);
  const filepath = path.resolve(UPLOADS_DIRECTORY, relativePath);
  return filepath.startsWith(`${UPLOADS_DIRECTORY}${path.sep}`) ? filepath : null;
};

/**
 * Public URL for a file saved by multer, e.g. "/uploads/images/123-abc.webp"
 */
const toUploadUrl = (file) =>
  `/uploads/${path.relative(UPLOADS_DIRECTORY, file.path).split(path.sep).join("/")}`;

/**
 * Safely removes a local file from disk
 */
const removeLocalFile = async (fileUrl) => {
  const filepath = getLocalFilePath(fileUrl);
  if (!filepath) return;

  try {
    await unlink(filepath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      logger.warn({ err: error, filepath }, "Could not remove uploaded section file");
    }
  }
};

/**
 * Clean up uploaded files in req.files upon request failure
 */
const cleanupUploadedReqFiles = async (files) => {
  if (!files) return;
  const fileArray = [];
  if (files.image) fileArray.push(...files.image);
  if (files.document) fileArray.push(...files.document);
  if (files.video) fileArray.push(...files.video);

  for (const file of fileArray) {
    try {
      await unlink(file.path);
    } catch (err) {
      logger.warn({ err, path: file.path }, "Failed to clean up newly uploaded file");
    }
  }
};

/**
 * GET /api/sections
 * Fetch paginated section & gallery items with optional filters
 */
export const getSections = async (req, res, next) => {
  try {
    const {
      module: moduleParam,
      category,
      search,
      fromDate,
      toDate,
      page = 1,
      pageSize = 10,
      includeDrafts = false,
    } = req.query;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(pageSize, 10) || 10));
    const skip = (pageNum - 1) * limitNum;

    const where = {};

    if (moduleParam) {
      if (!ALLOWED_SECTION_MODULES.includes(moduleParam)) {
        return res.status(400).json({
          success: false,
          message: `Invalid module. Allowed modules: ${ALLOWED_SECTION_MODULES.join(", ")}`,
        });
      }
      where.module = moduleParam;
    }

    if (category) {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { description: { contains: search } },
        { content: { contains: search } },
      ];
    }

    if (fromDate || toDate) {
      where.publishDate = {};
      if (fromDate) where.publishDate.gte = new Date(fromDate);
      if (toDate) where.publishDate.lte = new Date(toDate);
    }

    // Public visibility filter: hide items scheduled in the future unless admin explicitly requests drafts
    if (!includeDrafts) {
      const now = new Date();
      where.AND = [
        ...(where.AND || []),
        {
          OR: [{ publishDate: null }, { publishDate: { lte: now } }],
        },
      ];
    }

    const [total, sections] = await Promise.all([
      prisma.section.count({ where }),
      prisma.section.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: [
          { sortOrder: "asc" },
          { publishDate: "desc" },
          { createdAt: "desc" },
        ],
        include: { createdBy: createdBySelect },
      }),
    ]);

    return res.status(200).json({
      success: true,
      data: sections,
      meta: {
        page: pageNum,
        pageSize: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum) || 1,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/sections/:id
 * Get single section item by ID
 */
export const getSectionById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid section ID",
      });
    }

    const section = await prisma.section.findUnique({
      where: { id },
      include: { createdBy: createdBySelect },
    });

    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section item not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: section,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/admin/sections
 * Create a new generic section/gallery item (Admin only)
 */
export const createSection = async (req, res, next) => {
  try {
    const {
      module: moduleVal,
      title,
      description,
      content,
      category,
      imageUrl: imageUrlBody,
      documentUrl: documentUrlBody,
      videoUrl: videoUrlBody,
      link,
      fileType,
      publishDate,
      sortOrder,
    } = req.body;

    // An uploaded file wins; otherwise use a URL sent in the body (e.g. from POST /api/uploads/*)
    const files = req.files || {};
    const imageUrl = files.image?.[0] ? toUploadUrl(files.image[0]) : (imageUrlBody || null);
    const documentUrl = files.document?.[0] ? toUploadUrl(files.document[0]) : (documentUrlBody || null);
    const videoUrl = files.video?.[0] ? toUploadUrl(files.video[0]) : (videoUrlBody || null);

    const createdById = req.user?.id || null;

    try {
      const section = await prisma.section.create({
        data: {
          module: moduleVal,
          title,
          description: description || null,
          content: content || null,
          category: category || null,
          imageUrl,
          documentUrl,
          videoUrl,
          link: link || null,
          fileType: fileType || null,
          publishDate: publishDate ? new Date(publishDate) : null,
          sortOrder: sortOrder !== undefined ? parseInt(sortOrder, 10) : 0,
          createdById,
        },
        include: { createdBy: createdBySelect },
      });

      return res.status(201).json({
        success: true,
        message: "Section created successfully",
        data: section,
      });
    } catch (dbError) {
      await cleanupUploadedReqFiles(files);
      throw dbError;
    }
  } catch (error) {
    next(error);
  }
};

/**
 * PATCH /api/admin/sections/:id
 * Edit existing section item and optionally replace uploaded media
 */
export const updateSection = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid section ID",
      });
    }

    const existingSection = await prisma.section.findUnique({
      where: { id },
    });

    if (!existingSection) {
      await cleanupUploadedReqFiles(req.files);
      return res.status(404).json({
        success: false,
        message: "Section item not found",
      });
    }

    const {
      module: moduleVal,
      title,
      description,
      content,
      category,
      imageUrl: imageUrlBody,
      documentUrl: documentUrlBody,
      videoUrl: videoUrlBody,
      link,
      fileType,
      publishDate,
      sortOrder,
    } = req.body;

    const files = req.files || {};
    const newImageUrl = files.image?.[0] ? toUploadUrl(files.image[0]) : imageUrlBody;
    const newDocumentUrl = files.document?.[0] ? toUploadUrl(files.document[0]) : documentUrlBody;
    const newVideoUrl = files.video?.[0] ? toUploadUrl(files.video[0]) : videoUrlBody;

    const updateData = {};
    if (moduleVal !== undefined) updateData.module = moduleVal;
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (content !== undefined) updateData.content = content;
    if (category !== undefined) updateData.category = category;
    if (link !== undefined) updateData.link = link;
    if (fileType !== undefined) updateData.fileType = fileType;
    if (publishDate !== undefined) updateData.publishDate = publishDate ? new Date(publishDate) : null;
    if (sortOrder !== undefined) updateData.sortOrder = parseInt(sortOrder, 10);

    if (newImageUrl !== undefined) updateData.imageUrl = newImageUrl;
    if (newDocumentUrl !== undefined) updateData.documentUrl = newDocumentUrl;
    if (newVideoUrl !== undefined) updateData.videoUrl = newVideoUrl;

    try {
      const updatedSection = await prisma.section.update({
        where: { id },
        data: updateData,
        include: { createdBy: createdBySelect },
      });

      // Remove replaced files after successful database update
      if (newImageUrl !== undefined && existingSection.imageUrl && existingSection.imageUrl !== newImageUrl) {
        await removeLocalFile(existingSection.imageUrl);
      }
      if (newDocumentUrl !== undefined && existingSection.documentUrl && existingSection.documentUrl !== newDocumentUrl) {
        await removeLocalFile(existingSection.documentUrl);
      }
      if (newVideoUrl !== undefined && existingSection.videoUrl && existingSection.videoUrl !== newVideoUrl) {
        await removeLocalFile(existingSection.videoUrl);
      }

      return res.status(200).json({
        success: true,
        message: "Section updated successfully",
        data: updatedSection,
      });
    } catch (dbError) {
      await cleanupUploadedReqFiles(files);
      throw dbError;
    }
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/admin/sections/:id
 * Delete section item and unreferenced media files
 */
export const deleteSection = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 1) {
      return res.status(400).json({
        success: false,
        message: "Invalid section ID",
      });
    }

    const existingSection = await prisma.section.findUnique({
      where: { id },
    });

    if (!existingSection) {
      return res.status(404).json({
        success: false,
        message: "Section item not found",
      });
    }

    await prisma.section.delete({
      where: { id },
    });

    // Clean up associated local files from storage
    if (existingSection.imageUrl) await removeLocalFile(existingSection.imageUrl);
    if (existingSection.documentUrl) await removeLocalFile(existingSection.documentUrl);
    if (existingSection.videoUrl) await removeLocalFile(existingSection.videoUrl);

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/admin/sections/reorder
 * Bulk reorder sections
 */
export const reorderSections = async (req, res, next) => {
  try {
    const { items } = req.body; // [{ id: 1, sortOrder: 0 }, { id: 2, sortOrder: 1 }]

    const ids = items.map((item) => item.id);
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      return res.status(400).json({
        success: false,
        message: "Duplicate section IDs provided in reorder list",
      });
    }

    const existingSections = await prisma.section.findMany({
      where: { id: { in: ids } },
      select: { id: true },
    });

    if (existingSections.length !== ids.length) {
      return res.status(404).json({
        success: false,
        message: "One or more section IDs do not exist",
      });
    }

    await prisma.$transaction(
      items.map((item) =>
        prisma.section.update({
          where: { id: item.id },
          data: { sortOrder: item.sortOrder },
        })
      )
    );

    return res.status(200).json({
      success: true,
      message: "Sections reordered successfully",
    });
  } catch (error) {
    next(error);
  }
};
