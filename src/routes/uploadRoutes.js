import express from "express";
import {
  uploadImage,
  uploadDocument,
  uploadVideo,
  deleteUpload,
} from "../controllers/uploadController.js";
import { authenticate } from "../middlewares/auth.js";
import {
  uploadSingleImage,
  uploadSingleDocument,
  uploadSingleVideo,
} from "../middlewares/uploads.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { deleteUploadValidator } from "../validators/uploadValidators.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Uploads
 *     description: Reusable file upload and storage management endpoints (Multer & Storage Contract)
 */

/**
 * @swagger
 * /api/uploads/image:
 *   post:
 *     summary: Reusable image upload (Admin)
 *     description: Upload a single image file (JPG, PNG, WebP up to 2MB). Stores in /uploads/images/ and returns relative path.
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [file]
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Image file to upload (JPEG, PNG, WebP)
 *     responses:
 *       201:
 *         description: Image uploaded successfully
 *       400:
 *         description: No file uploaded or unsupported file type
 *       413:
 *         description: File size exceeds 2MB limit
 */
router.post("/uploads/image", authenticate, uploadSingleImage, uploadImage);

/**
 * @swagger
 * /api/uploads/document:
 *   post:
 *     summary: Reusable document upload (Admin)
 *     description: Upload a single document file (PDF, DOC, DOCX up to 20MB). Stores in /uploads/documents/ and returns relative path.
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [file]
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Document file to upload (PDF, DOC, DOCX)
 *     responses:
 *       201:
 *         description: Document uploaded successfully
 *       400:
 *         description: No file uploaded or unsupported file type
 *       413:
 *         description: File size exceeds 20MB limit
 */
router.post("/uploads/document", authenticate, uploadSingleDocument, uploadDocument);

/**
 * @swagger
 * /api/uploads/video:
 *   post:
 *     summary: Reusable video upload (Admin)
 *     description: Upload a single video file (MP4 up to 50MB). Stores in /uploads/videos/ and returns relative path.
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [file]
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: MP4 video file to upload
 *     responses:
 *       201:
 *         description: Video uploaded successfully
 *       400:
 *         description: No file uploaded or unsupported file type
 *       413:
 *         description: File size exceeds 50MB limit
 */
router.post("/uploads/video", authenticate, uploadSingleVideo, uploadVideo);

/**
 * @swagger
 * /api/uploads:
 *   delete:
 *     summary: Delete unreferenced file (Admin)
 *     description: Safely delete an unreferenced file from storage. Rejects path traversal and files currently referenced in the database.
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [path]
 *             properties:
 *               path:
 *                 type: string
 *                 example: /uploads/images/1725350000000-uuid.webp
 *     responses:
 *       204:
 *         description: File deleted successfully
 *       400:
 *         description: Invalid path or path traversal attempt
 *       404:
 *         description: File not found on disk
 *       409:
 *         description: File is referenced in database and cannot be deleted
 */
router.delete("/uploads", authenticate, deleteUploadValidator, validateRequest, deleteUpload);

export default router;
