import { body, param } from "express-validator";

export const createActivityValidator = [
  body("action")
    .trim()
    .notEmpty()
    .withMessage("action is required")
    .isLength({ max: 500 })
    .withMessage("action cannot exceed 500 characters"),
  body("type")
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage("type cannot exceed 20 characters"),
];

export const activityIdValidator = [
  param("id").isInt({ min: 1 }).withMessage("ID must be a positive integer"),
];
