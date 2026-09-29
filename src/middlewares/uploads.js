import { randomUUID } from "node:crypto";
import { mkdirSync } from "node:fs";
import { rename } from "node:fs/promises";
import path from "node:path";
import multer from "multer";

// Kept outside src so uploaded files are not treated as application source code.
export const UPLOADS_DIRECTORY = path.resolve(process.cwd(), "uploads");

// Every file is stored in the folder of the content it belongs to, e.g. uploads/notices/.
export const UPLOAD_FOLDERS = [
  "notices",
  "circulars",
  "tenders",
  "books/covers",
  "books/chapters",
  "leaders",
  "board-members",
  "officers",
  "past-mds",
  "employees",
  "admins",
  "md-message",
  "csr-policy",
  "printers",
  "rti",
  "gallery/photos",
  "gallery/videos",
  "gallery/press",
  "tools-resources",
  "latest-initiatives",
  "opmp",
  "registration-forms",
  "others",
];
export const DEFAULT_UPLOAD_FOLDER = "others";

// Folder for each content type
export const SECTION_UPLOAD_FOLDERS = {
  opmp: "opmp",
  tr: "tools-resources",
  cl: "latest-initiatives",
  csr: "csr-policy",
  "gl-photo": "gallery/photos",
  "gl-video": "gallery/videos",
  "gl-press": "gallery/press",
  "dc-reg-forms": "registration-forms",
};
export const DIRECTORY_UPLOAD_FOLDERS = {
  leader: "leaders",
  board_member: "board-members",
  officer: "officers",
  past_md: "past-mds",
  employee: "employees",
};
export const SETTING_UPLOAD_FOLDERS = {
  csr_policy_doc: "csr-policy",
  csr_policy_content: "csr-policy",
  printer_registry_doc: "printers",
  md_message: "md-message",
  "dc-rti": "rti",
};

// Tenders → tenders/, notices with category "Circular" → circulars/, other notices → notices/
export const noticeUploadFolder = (type, category) => {
  if (type === "Tender") return "tenders";
  if (typeof category === "string" && category.trim().toLowerCase() === "circular") return "circulars";
  return "notices";
};

mkdirSync(UPLOADS_DIRECTORY, { recursive: true });
for (const folder of UPLOAD_FOLDERS) {
  mkdirSync(path.resolve(UPLOADS_DIRECTORY, folder), { recursive: true });
}

/**
 * Chooses the folder multer saves into. Register before the multer middleware.
 * resolve: a folder name, or (req) => folder name. Empty → DEFAULT_UPLOAD_FOLDER; unknown → 400.
 */
export const setUploadFolder = (resolve) => (req, res, next) => {
  const folder = typeof resolve === "function" ? resolve(req) : resolve;
  if (folder && !UPLOAD_FOLDERS.includes(folder)) {
    return res.status(400).json({
      success: false,
      message: `folder must be one of: ${UPLOAD_FOLDERS.join(", ")}`,
    });
  }
  req.uploadFolder = folder || DEFAULT_UPLOAD_FOLDER;
  next();
};

// Every endpoint lives under /api, so uploaded files are served from /api/uploads/.
// Rows saved before this change still hold "/uploads/..." and are accepted as legacy paths.
export const UPLOADS_URL_PREFIX = "/api/uploads/";
const LEGACY_UPLOADS_URL_PREFIX = "/uploads/";

/**
 * Public URL for a file saved by multer, e.g. "/api/uploads/notices/123-abc.pdf"
 */
export const toUploadUrl = (file) =>
  `${UPLOADS_URL_PREFIX}${path.relative(UPLOADS_DIRECTORY, file.path).split(path.sep).join("/")}`;

/**
 * Path inside UPLOADS_DIRECTORY for an upload URL ("/api/uploads/..." or legacy "/uploads/..."),
 * or null when the URL is not a local upload.
 */
export const uploadRelativePath = (fileUrl) => {
  if (typeof fileUrl !== "string") return null;
  if (fileUrl.startsWith(UPLOADS_URL_PREFIX)) return fileUrl.slice(UPLOADS_URL_PREFIX.length);
  if (fileUrl.startsWith(LEGACY_UPLOADS_URL_PREFIX)) return fileUrl.slice(LEGACY_UPLOADS_URL_PREFIX.length);
  return null;
};

/**
 * Both stored forms of an upload URL, for database reference checks.
 */
export const uploadUrlVariants = (fileUrl) => {
  const relativePath = uploadRelativePath(fileUrl);
  if (relativePath === null) return [fileUrl];
  return [`${UPLOADS_URL_PREFIX}${relativePath}`, `${LEGACY_UPLOADS_URL_PREFIX}${relativePath}`];
};

/**
 * Safe absolute filesystem path for an upload URL, or null when outside UPLOADS_DIRECTORY.
 */
export const getLocalUploadPath = (fileUrl) => {
  const relativePath = uploadRelativePath(fileUrl);
  if (!relativePath) return null;
  const filepath = path.resolve(UPLOADS_DIRECTORY, relativePath);
  return filepath.startsWith(`${UPLOADS_DIRECTORY}${path.sep}`) ? filepath : null;
};

/**
 * Moves a stored upload into `folder` (when it is not there already) and returns its new URL.
 * Anything that is not a local upload, or a file that no longer exists, is returned unchanged.
 */
export const moveUploadToFolder = async (fileUrl, folder) => {
  const filepath = getLocalUploadPath(fileUrl);
  if (!filepath || !UPLOAD_FOLDERS.includes(folder)) return fileUrl;

  const filename = path.basename(filepath);
  const target = path.resolve(UPLOADS_DIRECTORY, folder, filename);
  if (target === filepath) return fileUrl;

  try {
    await rename(filepath, target);
  } catch (error) {
    if (error.code === "ENOENT") return fileUrl;
    throw error;
  }
  return `${UPLOADS_URL_PREFIX}${folder}/${filename}`;
};

/**
 * Moves a file multer just saved (req.file / req.files entry) into `folder` and updates file.path.
 */
export const moveUploadedFile = async (file, folder) => {
  if (!file || !UPLOAD_FOLDERS.includes(folder)) return;
  const target = path.resolve(UPLOADS_DIRECTORY, folder, file.filename);
  if (target === file.path) return;
  await rename(file.path, target);
  file.path = target;
  file.destination = path.dirname(target);
};

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
    cb(null, path.resolve(UPLOADS_DIRECTORY, req.uploadFolder || DEFAULT_UPLOAD_FOLDER));
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
