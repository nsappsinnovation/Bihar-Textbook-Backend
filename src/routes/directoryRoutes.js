import express from "express";

import { authenticate } from "../middlewares/auth.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import {
    getDirectoryValidator,
    getDirectoryRowValidator,
    createDirectoryValidator,
    updateDirectoryValidator,
    deleteDirectoryValidator,
} from "../validators/directoryValidator.js";

import {
    getDirectory,
    getDirectoryRow,
    createDirectoryRow,
    updateDirectoryRow,
    deleteDirectoryRow,
} from "../controllers/directoryContoller.js";

const router = express.Router();

router.get("/getDirectory/:type", getDirectoryValidator, validateRequest, getDirectory);
router.get("/getDirectoryRow/:type/:id", getDirectoryRowValidator, validateRequest, getDirectoryRow);
router.post("/admin/createDirectoryRow/:type", authenticate, createDirectoryValidator, validateRequest, createDirectoryRow);
router.patch("/admin/updateDirectoryRow/:type/:id", authenticate, updateDirectoryValidator, validateRequest, updateDirectoryRow);
router.delete("/admin/deleteDirectoryRow/:type/:id", authenticate, deleteDirectoryValidator, validateRequest, deleteDirectoryRow);

export default router;