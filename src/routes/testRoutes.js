import express from "express";

const router = express.Router();

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Health check — confirms the server is up and reachable
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Server is active
 */
router.get("/test", (req, res) => {
  res.json({ success: true, message: "The server is active" });
});

export default router;
