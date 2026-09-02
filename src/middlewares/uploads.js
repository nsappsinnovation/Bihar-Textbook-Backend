import { randomUUID } from "node:crypto";
import { mkdirSync } from "node:fs";
import path from "node:path";
import multer from "multer";

// Kept outside src so uploaded files are not treated as application source code.
export const UPLOADS_DIRECTORY = path.resolve(process.cwd(), "uploads");
mkdirSync(UPLOADS_DIRECTORY, { recursive: true });

const MIME_EXTENSIONS = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "application/pdf": ".pdf",
};

const createFileFilter = (allowedMimeTypes, message) => (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    return cb(null, true);
  }

  const error = new Error(message);
  error.statusCode = 400;
  error.code = "UNSUPPORTED_FILE_TYPE";
  return cb(error);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIRECTORY),
  filename: (req, file, cb) => {
    // Do not retain a user-controlled filename. The extension is determined by
    // the accepted MIME type so URLs and stored names remain predictable.
    cb(null, `${Date.now()}-${randomUUID()}${MIME_EXTENSIONS[file.mimetype]}`);
  },
});

const imageFilter = createFileFilter(
  ["image/jpeg", "image/png", "image/webp"],
  "Only JPG, PNG, and WEBP images are allowed",
);

const pdfFilter = createFileFilter(
  ["application/pdf"],
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
 * Example: router.post("/chapters", authenticate, uploadPdf.single("pdf"), createChapter);
 */
export const uploadPdf = multer({
  storage,
  fileFilter: pdfFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB per PDF
});

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
