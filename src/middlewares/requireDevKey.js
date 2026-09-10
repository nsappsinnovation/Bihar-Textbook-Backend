import env from "../config/env.js";

// Guards developer-only endpoints (create admin, reset password).
// Call them with the header:  x-dev-key: <DEV_API_KEY from .env>
export const requireDevKey = (req, res, next) => {
  if (req.headers["x-dev-key"] !== env.DEV_API_KEY) {
    return res.status(403).json({
      success: false,
      message: "Developer key required",
    });
  }
  next();
};
