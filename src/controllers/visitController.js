import prisma from "../config/db.js";

// POST /api/visits — public, anonymous, write-only. One row per page load (a book's reader
// page, or one of the 8 Learning Playground features). Validated by createVisitValidator.
export const createVisit = async (req, res, next) => {
  try {
    const { section, itemKey, device, visitorId } = req.body;
    await prisma.pageVisit.create({ data: { section, itemKey, device, visitorId } });
    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

const startOfMonth = () => {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), 1);
};

// Visit/unique/device counts for one section ("book" or "playground"), grouped by itemKey.
const sectionBreakdown = async (section) => {
  const visitRows = await prisma.pageVisit.groupBy({
    by: ["itemKey"],
    where: { section },
    _count: { _all: true },
  });

  // groupBy can't count *distinct* visitorId per itemKey directly, so pull (itemKey, visitorId)
  // pairs — already deduplicated by groupBy itself — and count them per itemKey in memory.
  // Fine at this table's scale (a visit log, not a huge analytics warehouse).
  const uniquePairs = await prisma.pageVisit.groupBy({ by: ["itemKey", "visitorId"], where: { section } });
  const uniqueByItem = {};
  for (const row of uniquePairs) {
    uniqueByItem[row.itemKey] = (uniqueByItem[row.itemKey] || 0) + 1;
  }

  const deviceRows = await prisma.pageVisit.groupBy({
    by: ["itemKey", "device"],
    where: { section },
    _count: { _all: true },
  });
  const deviceByItem = {};
  for (const row of deviceRows) {
    deviceByItem[row.itemKey] ||= { phone: 0, tablet: 0, desktop: 0 };
    deviceByItem[row.itemKey][row.device] = row._count._all;
  }

  return visitRows
    .map((row) => ({
      itemKey: row.itemKey,
      visits: row._count._all,
      unique: uniqueByItem[row.itemKey] || 0,
      byDevice: deviceByItem[row.itemKey] || { phone: 0, tablet: 0, desktop: 0 },
    }))
    .sort((a, b) => b.visits - a.visits);
};

// GET /api/admin/visits/summary — admin-only (authenticate middleware)
export const getVisitSummary = async (req, res, next) => {
  try {
    const since = startOfMonth();

    const [all, month, uniqueAllRows, uniqueMonthRows, deviceRows, books, playground] = await Promise.all([
      prisma.pageVisit.count(),
      prisma.pageVisit.count({ where: { createdAt: { gte: since } } }),
      prisma.pageVisit.groupBy({ by: ["visitorId"] }),
      prisma.pageVisit.groupBy({ by: ["visitorId"], where: { createdAt: { gte: since } } }),
      prisma.pageVisit.groupBy({ by: ["device"], _count: { _all: true } }),
      sectionBreakdown("book"),
      sectionBreakdown("playground"),
    ]);

    res.json({
      success: true,
      data: {
        totals: {
          all,
          month,
          uniqueAll: uniqueAllRows.length,
          uniqueMonth: uniqueMonthRows.length,
        },
        byDevice: deviceRows.map((row) => ({ device: row.device, count: row._count._all })),
        books,
        playground,
      },
    });
  } catch (error) {
    next(error);
  }
};
