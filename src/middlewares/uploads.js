import { randomUUID } from "node:crypto";
import { mkdirSync } from "node:fs";
import path from "node:path";
import multer from "multer";

// Kept outside src so uploaded files are not treated as application source code.
export const UPLOADS_DIRECTORY = path.resolve(process.cwd(), "uploads");
export const UPLOADS_IMAGES_DIR = path.resolve(UPLOADS_DIRECTORY, "images");
export const UPLOADS_DOCUMENTS_DIR = path.resolve(UPLOADS_DIRECTORY, "documents");
export const UPLOADS_VIDEOS_DIR = path.resolve(UPLOADS_DIRECTORY, "videos");

mkdirSync(UPLOADS_DIRECTORY, { recursive: true });
mkdirSync(UPLOADS_IMAGES_DIR, { recursive: true });
mkdirSync(UPLOADS_DOCUMENTS_DIR, { recursive: true });
mkdirSync(UPLOADS_VIDEOS_DIR, { recursive: true });

const MIME_EXTENSIONS = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/jpg": ".jpg",
  "image/pjpeg": ".jpg",
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "video/mp4": ".mp4",
};

const ALLOWED_IMAGE_MIMES = ["image/jpeg", "image/png", "image/webp", "image/jpg", "image/pjpeg"];
const ALLOWED_IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp"];

const ALLOWED_DOC_MIMES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/x-pdf",
];
const ALLOWED_DOC_EXTS = [".pdf", ".doc", ".docx"];

const ALLOWED_VIDEO_MIMES = ["video/mp4"];
const ALLOWED_VIDEO_EXTS = [".mp4"];

const isAllowedFileType = (file, allowedMimes, allowedExts) => {
  const mime = (file.mimetype || "").toLowerCase();
  if (allowedMimes.includes(mime)) {
    return true;
  }
  const ext = path.extname(file.originalname || "").toLowerCase();
  return allowedExts.includes(ext);
};

const createFileFilter = (allowedMimeTypes, allowedExts, message) => (req, file, cb) => {
  if (isAllowedFileType(file, allowedMimeTypes, allowedExts)) {
    return cb(null, true);
  }

  const error = new Error(message);
  error.statusCode = 400;
  error.code = "UNSUPPORTED_FILE_TYPE";
  return cb(error);
};

const sectionFileFilter = (req, file, cb) => {
  if (file.fieldname === "image") {
    if (isAllowedFileType(file, ALLOWED_IMAGE_MIMES, ALLOWED_IMAGE_EXTS)) {
      return cb(null, true);
    }
    const err = new Error("Only JPG, PNG, and WEBP images are allowed for image field");
    err.statusCode = 400;
    err.code = "UNSUPPORTED_FILE_TYPE";
    return cb(err);
  }
  if (file.fieldname === "document") {
    if (isAllowedFileType(file, ALLOWED_DOC_MIMES, ALLOWED_DOC_EXTS)) {
      return cb(null, true);
    }
    const err = new Error("Only PDF, DOC, and DOCX files are allowed for document field");
    err.statusCode = 400;
    err.code = "UNSUPPORTED_FILE_TYPE";
    return cb(err);
  }
  if (file.fieldname === "video") {
    if (isAllowedFileType(file, ALLOWED_VIDEO_MIMES, ALLOWED_VIDEO_EXTS)) {
      return cb(null, true);
    }
    const err = new Error("Only MP4 video files are allowed for video field");
    err.statusCode = 400;
    err.code = "UNSUPPORTED_FILE_TYPE";
    return cb(err);
  }
  return cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (isAllowedFileType(file, ALLOWED_IMAGE_MIMES, ALLOWED_IMAGE_EXTS)) {
      cb(null, UPLOADS_IMAGES_DIR);
    } else if (isAllowedFileType(file, ALLOWED_VIDEO_MIMES, ALLOWED_VIDEO_EXTS)) {
      cb(null, UPLOADS_VIDEOS_DIR);
    } else if (isAllowedFileType(file, ALLOWED_DOC_MIMES, ALLOWED_DOC_EXTS)) {
      cb(null, UPLOADS_DOCUMENTS_DIR);
    } else {
      cb(null, UPLOADS_DIRECTORY);
    }
  },
  filename: (req, file, cb) => {
    const ext = MIME_EXTENSIONS[file.mimetype] || path.extname(file.originalname) || ".bin";
    cb(null, `${Date.now()}-${randomUUID()}${ext}`);
  },
});

const imageFilter = createFileFilter(
  ALLOWED_IMAGE_MIMES,
  ALLOWED_IMAGE_EXTS,
  "Only JPG, PNG, and WEBP images are allowed",
);

const documentFilter = createFileFilter(
  ALLOWED_DOC_MIMES,
  ALLOWED_DOC_EXTS,
  "Only PDF, DOC, and DOCX files are allowed",
);

const videoFilter = createFileFilter(
  ALLOWED_VIDEO_MIMES,
  ALLOWED_VIDEO_EXTS,
  "Only MP4 video files are allowed",
);

const pdfFilter = createFileFilter(
  ["application/pdf"],
  [".pdf"],
  "Only PDF files are allowed",
);

/**
 * Use with .single(), .array(), or .fields() in an API route.
 * Example: router.post("/books", authenticate, uploadImage.single("coverImage"), createBook);
 */
export const uploadImage = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB per image
});

/**
 * Reusable image upload middleware for POST /api/uploads/image (max 2 MB)
 */
export const uploadSingleImage = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
}).single("file");

/**
 * Reusable document upload middleware for POST /api/uploads/document (max 20 MB)
 */
export const uploadSingleDocument = multer({
  storage,
  fileFilter: documentFilter,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB
}).single("file");

/**
 * Reusable video upload middleware for POST /api/uploads/video (max 50 MB)
 */
export const uploadSingleVideo = multer({
  storage,
  fileFilter: videoFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
}).single("file");

/**
 * Example: router.post("/chapters", authenticate, uploadPdf.single("pdf"), createChapter);
 */
export const uploadPdf = multer({
  storage,
  fileFilter: pdfFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB per PDF
});

/**
 * Section upload middleware supporting image (2MB), document (10MB), and video (50MB).
 */
export const uploadSectionFiles = multer({
  storage,
  fileFilter: sectionFileFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, // Overall upper bound for video (50 MB)
}).fields([
  { name: "image", maxCount: 1 },
  { name: "document", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);

/**
 * Optional error middleware for routes that need upload-specific responses.
 * Register after the routes, or merge these cases into the global error handler.
 */
export const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    const statusCode = err.code === "LIMIT_FILE_SIZE" ? 413 : 400;
    return res.status(statusCode).json({
      success: false,
      error:
        err.code === "LIMIT_FILE_SIZE"
          ? "Uploaded file exceeds the allowed size"
          : err.message,
    });
  }

  if (err?.code === "UNSUPPORTED_FILE_TYPE") {
    return res.status(400).json({ success: false, error: err.message });
  }

  return next(err);
};
