import prisma from "../config/db.js";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Returns 12 rows { month, monthName, distributed, target } for a year (missing months = 0)
const getDistributionForYear = async (year) => {
  const rows = await prisma.bookDistribution.findMany({ where: { year } });
  return MONTH_NAMES.map((monthName, index) => {
    const row = rows.find((r) => r.month === index + 1);
    return {
      month: index + 1,
      monthName,
      distributed: row?.distributed || 0,
      target: row?.target || 0,
    };
  });
};

// GET /api/admin/dashboard?year=2026 — counts and chart data for the admin dashboard
export const getDashboard = async (req, res, next) => {
  try {
    const year = Number(req.query.year) || new Date().getFullYear();

    const [books, notices, tenders, photos, videos, pressReleases, employees] = await Promise.all([
      prisma.book.count(),
      prisma.notice.count({ where: { type: "Notice" } }),
      prisma.notice.count({ where: { type: "Tender" } }),
      prisma.section.count({ where: { module: "gl-photo" } }),
      prisma.section.count({ where: { module: "gl-video" } }),
      prisma.section.count({ where: { module: "gl-press" } }),
      prisma.directory.count({ where: { type: "employee" } }),
    ]);

    // Monthly uploads for the last 12 months (books, notices/tenders, gallery items).
    // An item's date is its publish date when it has one, otherwise when it was created.
    const start = new Date();
    start.setDate(1);
    start.setMonth(start.getMonth() - 11);
    start.setHours(0, 0, 0, 0);

    const [bookDates, noticeDates, sectionDates] = await Promise.all([
      prisma.book.findMany({ where: { createdAt: { gte: start } }, select: { createdAt: true } }),
      prisma.notice.findMany({ select: { publishDate: true, createdAt: true } }),
      prisma.section.findMany({ select: { publishDate: true, createdAt: true } }),
    ]);

    const monthlyUploads = [];
    for (let i = 0; i < 12; i++) {
      const d = new Date(start.getFullYear(), start.getMonth() + i, 1);
      monthlyUploads.push({ key: `${d.getFullYear()}-${d.getMonth()}`, month: MONTH_NAMES[d.getMonth()], uploads: 0 });
    }
    for (const item of [...bookDates, ...noticeDates, ...sectionDates]) {
      const date = new Date(item.publishDate || item.createdAt);
      const bucket = monthlyUploads.find((m) => m.key === `${date.getFullYear()}-${date.getMonth()}`);
      if (bucket) bucket.uploads += 1;
    }

    res.json({
      success: true,
      data: {
        counts: { books, notices, tenders, photos, videos, pressReleases, employees },
        monthlyUploads: monthlyUploads.map(({ month, uploads }) => ({ month, uploads })),
        contentTypes: [
          { name: "Textbooks", value: books },
          { name: "Notices", value: notices },
          { name: "Tenders", value: tenders },
          { name: "Gallery", value: photos + videos },
          { name: "Press", value: pressReleases },
        ],
        distribution: await getDistributionForYear(year),
      },
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/admin/distribution?year=2026
export const getDistribution = async (req, res, next) => {
  try {
    const year = Number(req.query.year) || new Date().getFullYear();
    res.json({ success: true, data: await getDistributionForYear(year) });
  } catch (error) {
    next(error);
  }
};

// PUT /api/admin/distribution/:year — body { months: [{ month, distributed, target }] }
export const saveDistribution = async (req, res, next) => {
  try {
    const year = Number(req.params.year);

    await prisma.$transaction(
      req.body.months.map(({ month, distributed, target }) =>
        prisma.bookDistribution.upsert({
          where: { year_month: { year, month: Number(month) } },
          create: { year, month: Number(month), distributed: Number(distributed), target: Number(target) },
          update: { distributed: Number(distributed), target: Number(target) },
        })
      )
    );

    res.json({ success: true, message: "Distribution saved", data: await getDistributionForYear(year) });
  } catch (error) {
    next(error);
  }
};
