import prisma from "../config/db.js";

export const getDirectory = async (req, res) => {
    try {
        const type = req.params.type;
        const directory = await prisma.directory.findMany({
            where: { type: type },
            orderBy: {
                createdAt: "desc"
            }
        });
        res.status(200).json({ success: true, data: directory });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to get directory ", error: error.message });
    }
};

export const getDirectoryRow = async (req, res) => {
    try {
        const id = req.params.id;
        const type = req.params.type
        const directory = await prisma.directory.findFirst({
            where: { id: Number(id), type: type },
        });
        if (!directory) {
            return res.status(404).json({ success: false, message: "Directory row not found" });
        }
        res.status(200).json({ success: true, data: directory });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to get directory ", error: error.message });
    }
};

export const createDirectoryRow = async (req, res) => {
    try {
        const type = req.params.type;
        const data = req.body;
        const directory = await prisma.directory.create({
            data: {
                ...data,
                type: type,
            }
        });
        res.status(201).json({ success: true, message: "Directory row created successfully", data: directory });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create directory row ", error: error.message });
    }
};


export const updateDirectoryRow = async (req, res) => {
    try {
        const id = req.params.id;
        const type = req.params.type;
        const data = req.body;
        // Scope the update by both id and type. `type` is not a unique column, so
        // updateMany is used to keep the type check enforced at the DB level.
        const result = await prisma.directory.updateMany({
            where: { id: Number(id), type: type },
            data: {
                ...data,
            },
        });
        if (result.count === 0) {
            return res.status(404).json({ success: false, message: "Directory row not found" });
        }
        const directory = await prisma.directory.findUnique({ where: { id: Number(id) } });
        res.status(200).json({ success: true, message: "Directory row updated successfully", data: directory });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update directory row ", error: error.message });
    }
};

export const deleteDirectoryRow = async (req, res) => {
    try {
        const id = req.params.id;
        const type = req.params.type;
        const result = await prisma.directory.deleteMany({
            where: { id: Number(id), type: type },
        });
        if (result.count === 0) {
            return res.status(404).json({ success: false, message: "Directory row not found" });
        }
        res.status(200).json({ success: true, message: "Directory row deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete directory row ", error: error.message });
    }
};

