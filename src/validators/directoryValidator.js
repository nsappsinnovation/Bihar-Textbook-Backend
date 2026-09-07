import { body, param } from "express-validator";

const VALID_DIRECTORY_TYPES = ["leader", "board_member", "officer", "past_md"];

// Shared param validators
const typeParamCheck = param("type")
  .trim()
  .notEmpty()
  .withMessage("Directory type parameter is required")
  .isIn(VALID_DIRECTORY_TYPES)
  .withMessage(
    `Invalid directory type. Allowed types are: ${VALID_DIRECTORY_TYPES.join(", ")}`
  );

const idParamCheck = param("id")
  .notEmpty()
  .withMessage("ID parameter is required")
  .isInt({ min: 1 })
  .withMessage("ID must be a positive integer");

/**
 * Validator for GET /api/getDirectory/:type
 */
export const getDirectoryValidator = [
  typeParamCheck,
];

/**
 * Validator for GET /api/getDirectoryRow/:type/:id
 */
export const getDirectoryRowValidator = [
  typeParamCheck,
  idParamCheck,
];

/**
 * Validator for POST /api/admin/createDirectoryRow/:type
 */
export const createDirectoryValidator = [
  typeParamCheck,

  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 255 })
    .withMessage("Name cannot exceed 255 characters"),

  body("designation")
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage("Designation cannot exceed 255 characters"),

  body("department")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Department cannot exceed 200 characters"),

  body("tag")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Tag cannot exceed 50 characters"),

  body("email")
    .optional({ checkFalsy: true })
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .isLength({ max: 255 })
    .withMessage("Email cannot exceed 255 characters")
    .normalizeEmail(),

  body("phone")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 })
    .withMessage("Phone number cannot exceed 50 characters"),

  body("photoUrl")
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage("Photo URL must be a valid URL")
    .isLength({ max: 500 })
    .withMessage("Photo URL cannot exceed 500 characters"),

  body("tenureFrom")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 })
    .withMessage("Tenure 'from' date/string cannot exceed 50 characters"),

  body("tenureTo")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 })
    .withMessage("Tenure 'to' date/string cannot exceed 50 characters"),

  body("status")
    .optional()
    .trim()
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be either 'Active' or 'Inactive'"),

  body("sortOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Sort order must be a non-negative integer"),
];

/**
 * Validator for PATCH /api/admin/updateDirectoryRow/:type/:id
 */
export const updateDirectoryValidator = [
  typeParamCheck,
  idParamCheck,

  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ max: 255 })
    .withMessage("Name cannot exceed 255 characters"),

  body("designation")
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage("Designation cannot exceed 255 characters"),

  body("department")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Department cannot exceed 200 characters"),

  body("tag")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("Tag cannot exceed 50 characters"),

  body("email")
    .optional({ checkFalsy: true })
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .isLength({ max: 255 })
    .withMessage("Email cannot exceed 255 characters")
    .normalizeEmail(),

  body("phone")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 })
    .withMessage("Phone number cannot exceed 50 characters"),

  body("photoUrl")
    .optional({ checkFalsy: true })
    .trim()
    .isURL()
    .withMessage("Photo URL must be a valid URL")
    .isLength({ max: 500 })
    .withMessage("Photo URL cannot exceed 500 characters"),

  body("tenureFrom")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 })
    .withMessage("Tenure 'from' date/string cannot exceed 50 characters"),

  body("tenureTo")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 })
    .withMessage("Tenure 'to' date/string cannot exceed 50 characters"),

  body("status")
    .optional()
    .trim()
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be either 'Active' or 'Inactive'"),

  body("sortOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Sort order must be a non-negative integer"),
];

/**
 * Validator for DELETE /api/admin/deleteDirectoryRow/:type/:id
 */
export const deleteDirectoryValidator = [
  typeParamCheck,
  idParamCheck,
];
