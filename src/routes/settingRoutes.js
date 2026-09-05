import express from "express";
import {
  getSettings,
  getSettingByKey,
  updateSettingByKey,
  uploadSettingFile,
  deleteSettingFile,
} from "../controllers/settingController.js";
import { authenticate } from "../middlewares/auth.js";
import { uploadSingleDocument } from "../middlewares/uploads.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import {
  getSettingsQueryValidator,
  getSettingKeyValidator,
  putSettingValidator,
  fileSettingKeyValidator,
} from "../validators/settingValidators.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Settings & Registry
 *     description: API endpoints for managing site settings, RTI officer info, CSR policy documents, and printer registries
 */

/**
 * @swagger
 * /api/settings:
 *   get:
 *     summary: Get public portal settings
 *     description: Retrieve public portal settings (RTI info, CSR policy content, printer registry links). Automatically parses JSON string values into objects.
 *     tags: [Settings & Registry]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Optional category filter (e.g. RTI, CSR, Printers, General)
 *       - in: query
 *         name: keys
 *         schema:
 *           type: string
 *         description: Comma-separated list of setting keys (e.g. dc-rti,printer_registry_doc)
 *     responses:
 *       200:
 *         description: Map of settings with parsed values
 *       400:
 *         description: Invalid query parameters
 */
router.get("/settings", getSettingsQueryValidator, validateRequest, getSettings);

/**
 * @swagger
 * /api/settings/{key}:
 *   get:
 *     summary: Read single setting by key
 *     description: Retrieve one setting value by unique key (e.g. dc-rti). Automatically parses JSON objects.
 *     tags: [Settings & Registry]
 *     parameters:
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Setting value object
 *       404:
 *         description: Setting key not found
 */
router.get("/settings/:key", getSettingKeyValidator, validateRequest, getSettingByKey);

/**
 * @swagger
 * /api/admin/settings/{key}:
 *   put:
 *     summary: Update text or JSON setting (Admin)
 *     description: Update or create a portal setting. Accepts plain strings or JSON objects.
 *     tags: [Settings & Registry]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [value]
 *             properties:
 *               value:
 *                 oneOf:
 *                   - type: string
 *                   - type: object
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Setting updated successfully
 *       400:
 *         description: Invalid key or value
 */
router.put(
  "/admin/settings/:key",
  authenticate,
  putSettingValidator,
  validateRequest,
  updateSettingByKey
);

/**
 * @swagger
 * /api/admin/settings/{key}/file:
 *   post:
 *     summary: Upload file-backed setting PDF (Admin)
 *     description: Upload a PDF file for CSR policy (csr_policy_doc) or Empanalled Printer Registry (printer_registry_doc).
 *     tags: [Settings & Registry]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           type: string
 *           enum: [csr_policy_doc, printer_registry_doc]
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
 *                 description: PDF document file (max 10MB)
 *     responses:
 *       200:
 *         description: File uploaded and setting updated
 *       400:
 *         description: Unsupported setting key or file type
 *       413:
 *         description: PDF file exceeds size limit
 */
router.post(
  "/admin/settings/:key/file",
  authenticate,
  fileSettingKeyValidator,
  validateRequest,
  uploadSingleDocument,
  uploadSettingFile
);

/**
 * @swagger
 * /api/admin/settings/{key}/file:
 *   delete:
 *     summary: Remove setting PDF file (Admin)
 *     description: Clear stored file path for a file-backed setting key and delete the PDF from storage.
 *     tags: [Settings & Registry]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           type: string
 *           enum: [csr_policy_doc, printer_registry_doc]
 *     responses:
 *       204:
 *         description: Setting file removed successfully
 *       404:
 *         description: Setting key or file not found
 */
router.delete(
  "/admin/settings/:key/file",
  authenticate,
  fileSettingKeyValidator,
  validateRequest,
  deleteSettingFile
);

export default router;
