import { validationResult } from "express-validator";
import { unlink } from "node:fs/promises";

export const validateRequest = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Multer runs before body validation for multipart requests. Remove a file
    // that would otherwise become orphaned when validation rejects the request.
    if (req.file?.path) {
      await unlink(req.file.path).catch(() => {});
    }

    console.error(
      "❌ Validation Failed:",
      JSON.stringify(errors.array(), null, 2)
    );
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    });
  }

  next();
};
