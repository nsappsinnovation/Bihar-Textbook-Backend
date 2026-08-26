// middlewares/auth.js
import jwt from "jsonwebtoken";
import prisma from "../config/db.js";
import env from "../config/env.js";
import logger from "../utils/logger.js";

export const authenticate = async (req, res, next) => {
  try {
    let token;

    // Check Authorization header (Bearer token)
    const authHeader = req.headers["authorization"];
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // Fallback to cookies
    if (!token) {
      token = req.cookies?.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, env.JWT_SECRET);

    // Check if admin still exists and is active
    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        fullName: true,
        isActive: true,
      },
    });

    if (!admin || !admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Invalid token - admin not found or inactive",
      });
    }

    // Add admin to request
    req.user = {
      id: admin.id,
      email: admin.email,
      fullName: admin.fullName,
    };

    next();
  } catch (error) {
    logger.error({ err: error }, "Authentication error");

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
