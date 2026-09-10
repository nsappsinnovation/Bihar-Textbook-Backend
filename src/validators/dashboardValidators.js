import { body, param, query } from "express-validator";

const yearQuery = query("year").optional().isInt({ min: 2000, max: 2100 }).withMessage("year must be between 2000 and 2100");

export const dashboardQueryValidator = [yearQuery];

export const getDistributionValidator = [yearQuery];

export const saveDistributionValidator = [
  param("year").isInt({ min: 2000, max: 2100 }).withMessage("year must be between 2000 and 2100"),
  body("months").isArray({ min: 1, max: 12 }).withMessage("months must be an array of 1-12 items"),
  body("months.*.month").isInt({ min: 1, max: 12 }).withMessage("month must be 1-12"),
  body("months.*.distributed").isInt({ min: 0 }).withMessage("distributed must be a non-negative number"),
  body("months.*.target").isInt({ min: 0 }).withMessage("target must be a non-negative number"),
];
