import { body } from "express-validator";

export const deleteUploadValidator = [
  body("path")
    .notEmpty()
    .withMessage("path is required")
    .isString()
    .trim()
    .custom((value) => {
      if (!value.startsWith("/uploads/")) {
        throw new Error("path must start with /uploads/");
      }
      if (value.includes("..")) {
        throw new Error("Directory traversal is not allowed");
      }
      return true;
    }),
];
