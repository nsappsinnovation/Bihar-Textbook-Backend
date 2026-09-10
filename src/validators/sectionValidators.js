import { body, query, param } from "express-validator";
import { isUrlOrPath } from "./common.js";

export const ALLOWED_SECTION_MODULES = [
  "opmp",
  "tr",
  "gl-photo",
  "gl-video",
  "gl-press",
  "dc-reg-forms",
  "csr",
  "cl",
];

export const getSectionsQueryValidator = [
  query("module")
    .optional()
    .isIn(ALLOWED_SECTION_MODULES)
    .withMessage(
      `module must be one of: ${ALLOWED_SECTION_MODULES.join(", ")}`
    ),
  query("category").optional().isString().trim(),
  query("search").optional().isString().trim(),
  query("fromDate").optional().isISO8601().withMessage("fromDate must be a valid ISO 8601 date"),
  query("toDate").optional().isISO8601().withMessage("toDate must be a valid ISO 8601 date"),
  query("page").optional().isInt({ min: 1 }).toInt(),
  query("pageSize").optional().isInt({ min: 1, max: 100 }).toInt(),
  query("includeDrafts").optional().isBoolean().toBoolean(),
];

export const createSectionValidator = [
  body("module")
    .notEmpty()
    .withMessage("module is required")
    .isIn(ALLOWED_SECTION_MODULES)
    .withMessage(
      `module must be one of: ${ALLOWED_SECTION_MODULES.join(", ")}`
    ),
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .trim()
    .isLength({ max: 500 })
    .withMessage("title cannot exceed 500 characters"),
  body("description").optional().isString().trim(),
  body("content").optional().isString().trim(),
  body("category").optional().isString().trim().isLength({ max: 100 }),
  body("imageUrl").optional({ checkFalsy: true }).trim().custom(isUrlOrPath).isLength({ max: 500 }),
  body("documentUrl").optional({ checkFalsy: true }).trim().custom(isUrlOrPath).isLength({ max: 500 }),
  body("videoUrl").optional().isString().trim().isLength({ max: 500 }),
  body("link").optional().isString().trim().isLength({ max: 500 }),
  body("fileType").optional().isString().trim().isLength({ max: 20 }),
  body("publishDate")
    .optional()
    .isISO8601()
    .withMessage("publishDate must be a valid ISO 8601 date"),
  body("sortOrder").optional().isInt().toInt(),
];

export const updateSectionValidator = [
  param("id").isInt({ min: 1 }).withMessage("ID must be a positive integer").toInt(),
  body("module")
    .optional()
    .isIn(ALLOWED_SECTION_MODULES)
    .withMessage(
      `module must be one of: ${ALLOWED_SECTION_MODULES.join(", ")}`
    ),
  body("title")
    .optional()
    .isString()
    .trim()
    .isLength({ max: 500 })
    .withMessage("title cannot exceed 500 characters"),
  body("description").optional().isString().trim(),
  body("content").optional().isString().trim(),
  body("category").optional().isString().trim().isLength({ max: 100 }),
  body("imageUrl").optional({ checkFalsy: true }).trim().custom(isUrlOrPath).isLength({ max: 500 }),
  body("documentUrl").optional({ checkFalsy: true }).trim().custom(isUrlOrPath).isLength({ max: 500 }),
  body("videoUrl").optional().isString().trim().isLength({ max: 500 }),
  body("link").optional().isString().trim().isLength({ max: 500 }),
  body("fileType").optional().isString().trim().isLength({ max: 20 }),
  body("publishDate")
    .optional()
    .isISO8601()
    .withMessage("publishDate must be a valid ISO 8601 date"),
  body("sortOrder").optional().isInt().toInt(),
];

export const reorderSectionsValidator = [
  body("items").isArray({ min: 1 }).withMessage("items must be a non-empty array"),
  body("items.*.id")
    .isInt({ min: 1 })
    .withMessage("Each item must have a valid positive integer id"),
  body("items.*.sortOrder")
    .isInt({ min: 0 })
    .withMessage("Each item must have a non-negative integer sortOrder"),
];
