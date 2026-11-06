import { body } from "express-validator";

const SECTIONS = ["book", "playground"];
const DEVICES = ["phone", "tablet", "desktop"];

export const createVisitValidator = [
  body("section")
    .isIn(SECTIONS)
    .withMessage(`section must be one of: ${SECTIONS.join(", ")}`),
  body("device")
    .isIn(DEVICES)
    .withMessage(`device must be one of: ${DEVICES.join(", ")}`),
  body("itemKey")
    .trim()
    .notEmpty()
    .withMessage("itemKey is required")
    .isLength({ max: 255 })
    .withMessage("itemKey cannot exceed 255 characters"),
  body("visitorId")
    .trim()
    .notEmpty()
    .withMessage("visitorId is required")
    .isLength({ max: 100 })
    .withMessage("visitorId cannot exceed 100 characters"),
];
