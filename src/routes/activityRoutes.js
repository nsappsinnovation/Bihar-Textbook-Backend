import express from "express";
import { authenticate } from "../middlewares/auth.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { createActivityValidator, activityIdValidator } from "../validators/activityValidators.js";
import {
  getActivities,
  createActivity,
  markActivityRead,
  deleteActivity,
  clearActivities,
} from "../controllers/activityController.js";

const router = express.Router();

/**
 * @swagger
 * /api/admin/activities:
 *   get:
 *     summary: List the latest 30 admin activities (Notifications)
 *     tags: [Activities]
 *   post:
 *     summary: Log an activity — body { action, type }
 *     tags: [Activities]
 *   delete:
 *     summary: Clear all activities
 *     tags: [Activities]
 * /api/admin/activities/{id}/read:
 *   patch:
 *     summary: Mark one activity as read
 *     tags: [Activities]
 * /api/admin/activities/{id}:
 *   delete:
 *     summary: Delete one activity
 *     tags: [Activities]
 */
router.get("/admin/activities", authenticate, getActivities);
router.post("/admin/activities", authenticate, createActivityValidator, validateRequest, createActivity);
router.patch("/admin/activities/:id/read", authenticate, activityIdValidator, validateRequest, markActivityRead);
router.delete("/admin/activities/:id", authenticate, activityIdValidator, validateRequest, deleteActivity);
router.delete("/admin/activities", authenticate, clearActivities);

export default router;
