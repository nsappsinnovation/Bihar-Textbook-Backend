import { body } from "express-validator";
import { isUrlOrPath } from "./common.js";

const noticeFields = ({ requireTitle }) => [
  requireTitle
    ? body("title")
        .trim()
        .notEmpty()
        .withMessage("Notice title is required")
        .isLength({ max: 500 })
        .withMessage("Notice title cannot exceed 500 characters")
    : body("title")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Notice title cannot be empty")
        .isLength({ max: 500 })
        .withMessage("Notice title cannot exceed 500 characters"),
  body("description").optional({ nullable: true }).trim(),
  body("type")
    .optional()
    .isIn(["Notice", "Tender"])
    .withMessage("Type must be either 'Notice' or 'Tender'"),
  body("category")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Category cannot exceed 100 characters"),
  body("isPinned")
    .optional()
    .isBoolean()
    .withMessage("isPinned must be true or false")
    .toBoolean(),
  body("documentUrl")
    .optional({ checkFalsy: true })
    .trim()
    .custom(isUrlOrPath)
    .withMessage("Document URL must be a valid URL")
    .isLength({ max: 500 })
    .withMessage("Document URL cannot exceed 500 characters"),
  body("publishDate")
    .optional({ checkFalsy: true })
    .isISO8601({ strict: true })
    .withMessage("Publish date must be a valid ISO date"),
  body().custom((value, { req }) => {
    if (req.file && value.documentUrl) {
      throw new Error("Provide either a PDF file or documentUrl, not both");
    }
    return true;
  }),
];

export const createNoticeValidator = noticeFields({ requireTitle: true });
export const updateNoticeValidator = noticeFields({ requireTitle: false });
