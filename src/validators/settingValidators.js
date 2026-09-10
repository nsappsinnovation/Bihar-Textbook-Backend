import { body, param, query } from "express-validator";

export const PUBLIC_ALLOWED_SETTING_KEYS = [
  "dc-rti",
  "csr_policy_doc",
  "csr_policy_content",
  "printer_registry_doc",
  "site_config",
  "md_message",
];

export const FILE_BACKED_SETTING_KEYS = [
  "csr_policy_doc",
  "printer_registry_doc",
];

export const getSettingsQueryValidator = [
  query("category").optional().isString().trim(),
  query("keys").optional().isString().trim(),
];

export const getSettingKeyValidator = [
  param("key")
    .notEmpty()
    .withMessage("settingKey is required")
    .isString()
    .trim(),
];

export const putSettingValidator = [
  param("key")
    .notEmpty()
    .withMessage("settingKey is required")
    .isString()
    .trim(),
  body("value").exists().withMessage("value field is required"),
  body("category").optional().isString().trim(),
];

export const fileSettingKeyValidator = [
  param("key")
    .notEmpty()
    .withMessage("settingKey is required")
    .isIn(FILE_BACKED_SETTING_KEYS)
    .withMessage(
      `File uploads are only supported for keys: ${FILE_BACKED_SETTING_KEYS.join(", ")}`
    ),
];
