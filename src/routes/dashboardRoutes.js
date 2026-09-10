import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import {
  dashboardQueryValidator,
  getDistributionValidator,
  saveDistributionValidator,
} from "../validators/dashboardValidators.js";
import { getDashboard, getDistribution, saveDistribution } from "../controllers/dashboardController.js";

const router = express.Router();

/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     summary: Dashboard counts, monthly uploads, content split and distribution for a year
 *     tags: [Dashboard]
 *     parameters:
 *       - in: query
 *         name: year
 *         schema: { type: integer, example: 2026 }
 * /api/admin/distribution:
 *   get:
 *     summary: Monthly book distribution vs target for a year (12 rows)
 *     tags: [Dashboard]
 *     parameters:
 *       - in: query
 *         name: year
 *         schema: { type: integer, example: 2026 }
 * /api/admin/distribution/{year}:
 *   put:
 *     summary: Save distribution rows — body { months: [{ month, distributed, target }] }
 *     tags: [Dashboard]
 */
router.get("/admin/dashboard", authenticate, dashboardQueryValidator, validateRequest, getDashboard);
router.get("/admin/distribution", authenticate, getDistributionValidator, validateRequest, getDistribution);
router.put("/admin/distribution/:year", authenticate, saveDistributionValidator, validateRequest, saveDistribution);

export default router;
