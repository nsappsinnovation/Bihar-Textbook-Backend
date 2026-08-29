import { body } from "express-validator";

export const createBookValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Book title is required")
    .isLength({ max: 255 })
    .withMessage("Title cannot exceed 255 characters"),
  body("classId")
    .notEmpty()
    .withMessage("Class ID is required")
    .isInt({ min: 1, max: 12 })
    .withMessage("Class ID must be an integer between 1 and 12"),
  body("subject")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Subject cannot be empty if provided")
    .isLength({ max: 100 })
    .withMessage("Subject cannot exceed 100 characters"),
  body("board")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Board cannot be empty if provided")
    .isLength({ max: 200 })
    .withMessage("Board cannot exceed 200 characters"),
  body("coverImageUrl")
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage("Cover image URL must be a valid URL")
    .isLength({ max: 500 })
    .withMessage("Cover image URL cannot exceed 500 characters"),
  body("description")
    .optional()
    .trim(),
  body("status")
    .optional()
    .isIn(["Published", "Draft"])
    .withMessage("Status must be either 'Published' or 'Draft'"),
  body("sortOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Sort order must be a non-negative integer"),
];

export const updateBookValidator = [
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Book title cannot be empty")
    .isLength({ max: 255 })
    .withMessage("Title cannot exceed 255 characters"),
  body("classId")
    .optional()
    .isInt({ min: 1, max: 12 })
    .withMessage("Class ID must be an integer between 1 and 12"),
  body("subject")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Subject cannot exceed 100 characters"),
  body("board")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Board cannot exceed 200 characters"),
  body("coverImageUrl")
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage("Cover image URL must be a valid URL")
    .isLength({ max: 500 })
    .withMessage("Cover image URL cannot exceed 500 characters"),
  body("description")
    .optional()
    .trim(),
  body("status")
    .optional()
    .isIn(["Published", "Draft"])
    .withMessage("Status must be either 'Published' or 'Draft'"),
  body("sortOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Sort order must be a non-negative integer"),
];

export const createChapterValidator = [
  body("chapterNumber")
    .notEmpty()
    .withMessage("Chapter number is required")
    .isInt({ min: 1 })
    .withMessage("Chapter number must be a positive integer"),
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Chapter title is required")
    .isLength({ max: 255 })
    .withMessage("Chapter title cannot exceed 255 characters"),
  body("pdfUrl")
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage("PDF URL must be a valid URL")
    .isLength({ max: 500 })
    .withMessage("PDF URL cannot exceed 500 characters"),
  body("sortOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Sort order must be a non-negative integer"),
];

export const updateChapterValidator = [
  body("chapterNumber")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Chapter number must be a positive integer"),
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Chapter title cannot be empty")
    .isLength({ max: 255 })
    .withMessage("Chapter title cannot exceed 255 characters"),
  body("pdfUrl")
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage("PDF URL must be a valid URL")
    .isLength({ max: 500 })
    .withMessage("PDF URL cannot exceed 500 characters"),
  body("sortOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Sort order must be a non-negative integer"),
];
