import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { createVisitValidator } from "../validators/visitValidators.js";
import { createVisit, getVisitSummary } from "../controllers/visitController.js";

const router = express.Router();

/**
 * @swagger
 * /api/visits:
 *   post:
 *     summary: Record one anonymous page visit (a book's reader page, or a Learning Playground feature) — body { section, itemKey, device, visitorId }
 *     tags: [Visits]
 * /api/admin/visits/summary:
 *   get:
 *     summary: Aggregated visit totals, monthly/unique counts, device split, and a per-book / per-feature breakdown
 *     tags: [Visits]
 */
router.post("/visits", createVisitValidator, validateRequest, createVisit);
router.get("/admin/visits/summary", authenticate, getVisitSummary);

export default router;
