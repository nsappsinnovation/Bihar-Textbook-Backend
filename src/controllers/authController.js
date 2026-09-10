// controllers/authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/db.js";
import env from "../config/env.js";
import logger from "../utils/logger.js";

export const signAndSetCookie = (res, admin) => {
  const payload = {
    id: admin.id,
    email: admin.email,
    fullName: admin.fullName,
  };

  const token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: "7d" });

  const isProd = env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

// POST /api/auth/signup
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, phone } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingAdmin = await prisma.admin.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "Admin with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await prisma.admin.create({
      data: {
        fullName,
        email: normalizedEmail,
        passwordHash: hashedPassword,
        phone: phone || null,
      },
    });

    signAndSetCookie(res, admin);

    logger.info({ adminId: admin.id, email: admin.email }, "New admin registered");

    return res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      user: {
        id: admin.id,
        fullName: admin.fullName,
        email: admin.email,
      },
    });
  } catch (error) {
    logger.error({ err: error }, "Signup error");
    return res.status(500).json({
      success: false,
      message: "Internal server error during signup",
    });
  }
};

// POST /api/auth/login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    const genericError = {
      success: false,
      message: "Invalid email or password",
    };

    if (!admin) {
      return res.status(401).json(genericError);
    }

    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account is deactivated. Please contact administrator.",
      });
    }

    const isValidPassword = await bcrypt.compare(password, admin.passwordHash);

    if (!isValidPassword) {
      return res.status(401).json(genericError);
    }

    // Update last login timestamp
    await prisma.admin.update({
      where: { id: admin.id },
      data: {
        updatedAt: new Date(),
      },
    });

    signAndSetCookie(res, admin);

    logger.info({ adminId: admin.id, email: admin.email }, "Admin logged in");

    return res.json({
      success: true,
      message: "Login successful",
      user: {
        id: admin.id,
        fullName: admin.fullName,
        email: admin.email,
      },
    });
  } catch (error) {
    logger.error({ err: error }, "Login error");
    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
    });
  }
};

// GET /api/auth/me
export const me = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET);

    res.json({
      success: true,
      user: {
        id: decoded.id,
        email: decoded.email,
        fullName: decoded.fullName || "BTBP Admin",
      },
    });
  } catch (error) {
    logger.error({ err: error }, "Auth check error");
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

// POST /api/auth/logout
export const logout = async (req, res) => {
  try {
    const isProd = env.NODE_ENV === "production";

    res.clearCookie("token", {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? "none" : "lax",
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error during logout",
    });
  }
};

// POST /api/auth/reset-password  (developer only — protected by requireDevKey)
export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const normalizedEmail = email.trim().toLowerCase();

    const admin = await prisma.admin.findUnique({
      where: { email: normalizedEmail },
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin with this email not found",
      });
    }

    await prisma.admin.update({
      where: { id: admin.id },
      data: { passwordHash: await bcrypt.hash(newPassword, 12) },
    });

    logger.info({ adminId: admin.id }, "Admin password reset by developer");

    return res.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    logger.error({ err: error }, "Reset password error");
    return res.status(500).json({
      success: false,
      message: "Error resetting password",
    });
  }
};

// GET /api/auth/profile
export const getProfile = async (req, res) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        avatarUrl: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    return res.json({
      success: true,
      user: admin,
    });
  } catch (error) {
    logger.error({ err: error }, "Profile fetch error");
    return res.status(500).json({
      success: false,
      message: "Error fetching profile",
    });
  }
};
