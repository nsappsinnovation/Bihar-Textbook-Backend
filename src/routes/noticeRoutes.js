import express from "express";
import {
  createNotice,
  deleteNotice,
  getNoticeById,
  getNotices,
  updateNotice,
} from "../controllers/noticeController.js";
import { authenticate } from "../middlewares/auth.js";
import { uploadPdf } from "../middlewares/uploads.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { createNoticeValidator, updateNoticeValidator } from "../validators/noticeValidators.js";

const router = express.Router();

router.get("/", getNotices);
router.get("/:id", getNoticeById);
router.post(
  "/",
  authenticate,
  uploadPdf.single("document"),
  createNoticeValidator,
  validateRequest,
  createNotice,
);
router.put(
  "/:id",
  authenticate,
  uploadPdf.single("document"),
  updateNoticeValidator,
  validateRequest,
  updateNotice,
);
router.delete("/:id", authenticate, deleteNotice);

export default router;
