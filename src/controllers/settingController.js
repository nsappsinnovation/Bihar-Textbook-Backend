import { unlink } from "node:fs/promises";
import path from "node:path";
import prisma from "../config/db.js";
import { UPLOADS_DIRECTORY } from "../middlewares/uploads.js";
import logger from "../utils/logger.js";
import { PUBLIC_ALLOWED_SETTING_KEYS } from "../validators/settingValidators.js";

const updatedBySelect = {
  select: { id: true, fullName: true, email: true },
};

/**
 * Parses setting value if valid JSON string, otherwise returns string directly
 */
const parseSettingValue = (value) => {
  if (!value || typeof value !== "string") return value;
  const trimmed = value.trim();
  if ((trimmed.startsWith("{") && trimmed.endsWith("}")) || (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return value;
    }
  }
  return value;
};

/**
 * Safely removes a local file from disk
 */
const removeLocalFile = async (fileUrl) => {
  if (!fileUrl || typeof fileUrl !== "string" || !fileUrl.startsWith("/uploads/")) return;
  const filename = path.basename(fileUrl);
  const filepath = path.resolve(UPLOADS_DIRECTORY, filename);
  if (!filepath.startsWith(`${UPLOADS_DIRECTORY}${path.sep}`)) return;

  try {
    await unlink(filepath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      logger.warn({ err: error, filepath }, "Could not remove setting file");
    }
  }
};

/**
 * GET /api/settings
 * Fetch public settings filtered by category or comma-separated keys
 */
export const getSettings = async (req, res, next) => {
  try {
    const { category, keys } = req.query;

    const where = {};

    if (keys) {
      const keysList = keys
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
      where.settingKey = { in: keysList };
    } else {
      // By default, restrict public queries to explicitly allowed public setting keys
      where.settingKey = { in: PUBLIC_ALLOWED_SETTING_KEYS };
    }

    if (category) {
      where.category = category;
    }

    const settings = await prisma.setting.findMany({
      where,
      include: { updatedBy: updatedBySelect },
      orderBy: { updatedAt: "desc" },
    });

    const parsedMap = {};
    const list = settings.map((item) => {
      const parsedVal = parseSettingValue(item.settingValue);
      parsedMap[item.settingKey] = parsedVal;
      return {
        id: item.id,
        settingKey: item.settingKey,
        value: parsedVal,
        category: item.category,
        updatedAt: item.updatedAt,
        updatedBy: item.updatedBy,
      };
    });

    return res.status(200).json({
      success: true,
      data: parsedMap,
      list,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/settings/:key
 * Read single setting by key
 */
export const getSettingByKey = async (req, res, next) => {
  try {
    const { key } = req.params;

    const setting = await prisma.setting.findUnique({
      where: { settingKey: key },
      include: { updatedBy: updatedBySelect },
    });

    if (!setting) {
      return res.status(404).json({
        success: false,
        message: "Setting key not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: setting.id,
        settingKey: setting.settingKey,
        value: parseSettingValue(setting.settingValue),
        category: setting.category,
        updatedAt: setting.updatedAt,
        updatedBy: setting.updatedBy,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/admin/settings/:key
 * Update or create text/JSON setting (Admin only)
 */
export const updateSettingByKey = async (req, res, next) => {
  try {
    const { key } = req.params;
    const { value, category } = req.body;
    const updatedById = req.admin?.id || null;

    const stringifiedValue =
      typeof value === "object" && value !== null
        ? JSON.stringify(value)
        : String(value ?? "");

    const setting = await prisma.setting.upsert({
      where: { settingKey: key },
      create: {
        settingKey: key,
        settingValue: stringifiedValue,
        category: category || null,
        updatedById,
      },
      update: {
        settingValue: stringifiedValue,
        category: category !== undefined ? category : undefined,
        updatedById,
      },
      include: { updatedBy: updatedBySelect },
    });

    return res.status(200).json({
      success: true,
      message: "Setting updated successfully",
      data: {
        id: setting.id,
        settingKey: setting.settingKey,
        value: parseSettingValue(setting.settingValue),
        category: setting.category,
        updatedAt: setting.updatedAt,
        updatedBy: setting.updatedBy,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/admin/settings/:key/file
 * Upload file-backed setting (Admin only - for CSR & Printer Registry PDFs)
 */
export const uploadSettingFile = async (req, res, next) => {
  try {
    const { key } = req.params;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No PDF file uploaded under 'file' field",
      });
    }

    const relativePath = `/uploads/documents/${file.filename}`;
    const updatedById = req.admin?.id || null;

    const existingSetting = await prisma.setting.findUnique({
      where: { settingKey: key },
    });

    const oldFilePath = existingSetting?.settingValue;

    const setting = await prisma.setting.upsert({
      where: { settingKey: key },
      create: {
        settingKey: key,
        settingValue: relativePath,
        category: key.includes("printer") ? "Printers" : "CSR",
        updatedById,
      },
      update: {
        settingValue: relativePath,
        updatedById,
      },
      include: { updatedBy: updatedBySelect },
    });

    // Clean up old file if replacing
    if (oldFilePath && oldFilePath !== relativePath) {
      await removeLocalFile(oldFilePath);
    }

    return res.status(200).json({
      success: true,
      message: "Setting file uploaded successfully",
      data: {
        id: setting.id,
        settingKey: setting.settingKey,
        value: relativePath,
        category: setting.category,
        updatedAt: setting.updatedAt,
        updatedBy: setting.updatedBy,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/admin/settings/:key/file
 * Remove stored PDF file and clear setting value (Admin only)
 */
export const deleteSettingFile = async (req, res, next) => {
  try {
    const { key } = req.params;

    const existingSetting = await prisma.setting.findUnique({
      where: { settingKey: key },
    });

    if (!existingSetting || !existingSetting.settingValue) {
      return res.status(404).json({
        success: false,
        message: "Setting or associated file not found",
      });
    }

    const oldFilePath = existingSetting.settingValue;

    await prisma.setting.update({
      where: { settingKey: key },
      data: {
        settingValue: null,
        updatedById: req.admin?.id || null,
      },
    });

    await removeLocalFile(oldFilePath);

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
