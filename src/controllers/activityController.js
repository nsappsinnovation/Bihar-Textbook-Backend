import prisma from "../config/db.js";

// Shape sent to the admin panel
const toActivity = (row) => ({
  id: row.id,
  action: row.action,
  type: row.type,
  read: row.isRead,
  user: row.admin?.fullName || "System",
  createdAt: row.createdAt,
});

// GET /api/admin/activities — latest 30 activities
export const getActivities = async (req, res, next) => {
  try {
    const rows = await prisma.activityLog.findMany({
      orderBy: { createdAt: "desc" },
      take: 30,
      include: { admin: { select: { fullName: true } } },
    });
    res.json({ success: true, data: rows.map(toActivity) });
  } catch (error) {
    next(error);
  }
};

// POST /api/admin/activities — { action, type }
export const createActivity = async (req, res, next) => {
  try {
    const row = await prisma.activityLog.create({
      data: {
        action: req.body.action,
        type: req.body.type || "system",
        adminId: req.user.id,
      },
      include: { admin: { select: { fullName: true } } },
    });
    res.status(201).json({ success: true, data: toActivity(row) });
  } catch (error) {
    next(error);
  }
};

// PATCH /api/admin/activities/:id/read
export const markActivityRead = async (req, res, next) => {
  try {
    const result = await prisma.activityLog.updateMany({
      where: { id: Number(req.params.id) },
      data: { isRead: true },
    });
    if (result.count === 0) {
      return res.status(404).json({ success: false, message: "Activity not found" });
    }
    res.json({ success: true, message: "Marked as read" });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/admin/activities/:id
export const deleteActivity = async (req, res, next) => {
  try {
    const result = await prisma.activityLog.deleteMany({
      where: { id: Number(req.params.id) },
    });
    if (result.count === 0) {
      return res.status(404).json({ success: false, message: "Activity not found" });
    }
    res.json({ success: true, message: "Activity deleted" });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/admin/activities — clear all
export const clearActivities = async (req, res, next) => {
  try {
    await prisma.activityLog.deleteMany({});
    res.json({ success: true, message: "All activities cleared" });
  } catch (error) {
    next(error);
  }
};
