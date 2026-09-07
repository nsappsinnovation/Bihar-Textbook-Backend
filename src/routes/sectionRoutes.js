import express from "express";
import {
  getSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
  reorderSections,
} from "../controllers/sectionController.js";
import { authenticate } from "../middlewares/auth.js";
import { uploadSectionFiles } from "../middlewares/uploads.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import {
  getSectionsQueryValidator,
  createSectionValidator,
  updateSectionValidator,
  reorderSectionsValidator,
} from "../validators/sectionValidators.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Generic Sections & Gallery
 *     description: API endpoints for managing Initiatives, Tools & Resources, Gallery (Photo/Video/Press), and Registration Forms
 */

/**
 * @swagger
 * /api/sections:
 *   get:
 *     summary: Get all section / gallery items
 *     description: Retrieve paginated section items filtered by module, category, search keyword, or date range.
 *     tags: [Generic Sections & Gallery]
 *     parameters:
 *       - in: query
 *         name: module
 *         schema:
 *           type: string
 *           enum: [opmp, tr, gl-photo, gl-video, gl-press, dc-reg-forms, csr]
 *         description: Module allow-list filter
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Optional category filter
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search keyword matching title, description, or content
 *       - in: query
 *         name: fromDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Start publish date (ISO format YYYY-MM-DD)
 *       - in: query
 *         name: toDate
 *         schema:
 *           type: string
 *           format: date
 *         description: End publish date (ISO format YYYY-MM-DD)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: includeDrafts
 *         schema:
 *           type: boolean
 *           default: false
 *         description: Set true to include future scheduled items (Admin option)
 *     responses:
 *       200:
 *         description: Standard paginated list of section items
 *       400:
 *         description: Invalid query parameters
 */
router.get("/sections", getSectionsQueryValidator, validateRequest, getSections);

/**
 * @swagger
 * /api/sections/{id}:
 *   get:
 *     summary: Get single section item
 *     description: Retrieve details for a specific section or gallery item by ID.
 *     tags: [Generic Sections & Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Section object
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Section item not found
 */
router.get("/sections/:id", getSectionById);

/**
 * @swagger
 * /api/admin/sections/reorder:
 *   post:
 *     summary: Reorder section items (Admin)
 *     description: Update sort order for multiple section items in a single transaction.
 *     tags: [Generic Sections & Gallery]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [items]
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required: [id, sortOrder]
 *                   properties:
 *                     id:
 *                       type: integer
 *                     sortOrder:
 *                       type: integer
 *     responses:
 *       200:
 *         description: Reorder completed successfully
 *       400:
 *         description: Invalid input or duplicate IDs
 *       404:
 *         description: One or more section IDs not found
 */
router.post(
  "/admin/sections/reorder",
  authenticate,
  reorderSectionsValidator,
  validateRequest,
  reorderSections
);

/**
 * @swagger
 * /api/admin/sections:
 *   post:
 *     summary: Create section / gallery item (Admin)
 *     description: Create generic section content with optional file attachments (image max 2MB, document max 10MB, video max 50MB).
 *     tags: [Generic Sections & Gallery]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [module, title]
 *             properties:
 *               module:
 *                 type: string
 *                 enum: [opmp, tr, gl-photo, gl-video, gl-press, dc-reg-forms, csr]
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *               videoUrl:
 *                 type: string
 *               link:
 *                 type: string
 *               fileType:
 *                 type: string
 *               publishDate:
 *                 type: string
 *                 format: date
 *               sortOrder:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *               document:
 *                 type: string
 *                 format: binary
 *               video:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Section item created successfully
 *       400:
 *         description: Validation error or unsupported file type
 *       413:
 *         description: File size limit exceeded
 */
router.post(
  "/admin/sections",
  authenticate,
  uploadSectionFiles,
  createSectionValidator,
  validateRequest,
  createSection
);

/**
 * @swagger
 * /api/admin/sections/{id}:
 *   patch:
 *     summary: Update section item (Admin)
 *     description: Partially update section fields and optionally replace uploaded media files. Old files will be deleted from disk.
 *     tags: [Generic Sections & Gallery]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               module:
 *                 type: string
 *                 enum: [opmp, tr, gl-photo, gl-video, gl-press, dc-reg-forms, csr]
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *               videoUrl:
 *                 type: string
 *               link:
 *                 type: string
 *               fileType:
 *                 type: string
 *               publishDate:
 *                 type: string
 *                 format: date
 *               sortOrder:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *               document:
 *                 type: string
 *                 format: binary
 *               video:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Section item updated successfully
 *       400:
 *         description: Validation error or invalid ID
 *       404:
 *         description: Section item not found
 */
router.patch(
  "/admin/sections/:id",
  authenticate,
  uploadSectionFiles,
  updateSectionValidator,
  validateRequest,
  updateSection
);

/**
 * @swagger
 * /api/admin/sections/{id}:
 *   delete:
 *     summary: Delete section item (Admin)
 *     description: Delete section item and automatically remove any associated uploaded files from storage.
 *     tags: [Generic Sections & Gallery]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Section item deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Section item not found
 */
router.delete("/admin/sections/:id", authenticate, deleteSection);

export default router;
