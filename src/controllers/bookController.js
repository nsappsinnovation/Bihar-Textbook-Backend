import prisma from "../config/db.js";
import logger from "../utils/logger.js";

// GET /api/books
export const getBooks = async (req, res) => {
  try {
    const { classId, subject, status, page = 1, limit = 10 } = req.query;

    const where = {};
    if (classId) {
      where.classId = parseInt(classId, 10);
    }
    if (subject) {
      where.subject = {
        equals: subject,
      };
    }
    if (status) {
      where.status = status;
    }

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const [books, totalItems] = await Promise.all([
      prisma.book.findMany({
        where,
        skip,
        take: limitNum,
        include: {
          _count: {
            select: { chapters: true },
          },
        },
        orderBy: {
          sortOrder: "asc",
        },
      }),
      prisma.book.count({ where }),
    ]);

    // Map database properties to match frontend expected schema
    const mappedBooks = books.map((book) => ({
      ...book,
      image: book.coverImageUrl || "/bookcover.png",
      chapterCount: book._count.chapters,
    }));

    const totalPages = Math.ceil(totalItems / limitNum);

    return res.status(200).json({
      success: true,
      data: mappedBooks,
      pagination: {
        totalItems,
        totalPages,
        currentPage: pageNum,
        itemsPerPage: limitNum,
      },
    });
  } catch (error) {
    logger.error({ err: error }, "Error fetching books");
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching books",
    });
  }
};

// GET /api/books/:id
export const getBookById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const book = await prisma.book.findUnique({
      where: { id },
      include: {
        chapters: {
          orderBy: [
            { sortOrder: "asc" },
            { chapterNumber: "asc" },
          ],
        },
      },
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    const mappedBook = {
      ...book,
      image: book.coverImageUrl || "/bookcover.png",
    };

    return res.status(200).json({
      success: true,
      data: mappedBook,
    });
  } catch (error) {
    logger.error({ err: error, bookId: req.params.id }, "Error fetching book by ID");
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching book details",
    });
  }
};

// POST /api/books
export const createBook = async (req, res) => {
  try {
    const { title, classId, subject, board, coverImageUrl, description, status, sortOrder } = req.body;

    const book = await prisma.book.create({
      data: {
        title,
        classId: parseInt(classId, 10),
        subject: subject || "General",
        board: board || "Bihar Board",
        coverImageUrl: coverImageUrl || null,
        description: description || null,
        status: status || "Draft",
        sortOrder: sortOrder !== undefined ? parseInt(sortOrder, 10) : 0,
        createdById: req.user.id,
      },
    });

    logger.info({ bookId: book.id, title: book.title, adminId: req.user.id }, "Book created successfully");

    return res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: {
        ...book,
        image: book.coverImageUrl || "/bookcover.png",
      },
    });
  } catch (error) {
    logger.error({ err: error }, "Error creating book");
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating book",
    });
  }
};

// PUT /api/books/:id
export const updateBook = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { title, classId, subject, board, coverImageUrl, description, status, sortOrder } = req.body;

    const existingBook = await prisma.book.findUnique({
      where: { id },
    });

    if (!existingBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (classId !== undefined) updateData.classId = parseInt(classId, 10);
    if (subject !== undefined) updateData.subject = subject;
    if (board !== undefined) updateData.board = board;
    if (coverImageUrl !== undefined) updateData.coverImageUrl = coverImageUrl;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) updateData.status = status;
    if (sortOrder !== undefined) updateData.sortOrder = parseInt(sortOrder, 10);

    const updatedBook = await prisma.book.update({
      where: { id },
      data: updateData,
    });

    logger.info({ bookId: id, adminId: req.user.id }, "Book updated successfully");

    return res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: {
        ...updatedBook,
        image: updatedBook.coverImageUrl || "/bookcover.png",
      },
    });
  } catch (error) {
    logger.error({ err: error, bookId: req.params.id }, "Error updating book");
    return res.status(500).json({
      success: false,
      message: "Internal server error while updating book",
    });
  }
};

// DELETE /api/books/:id
export const deleteBook = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const existingBook = await prisma.book.findUnique({
      where: { id },
    });

    if (!existingBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    await prisma.book.delete({
      where: { id },
    });

    logger.info({ bookId: id, adminId: req.user.id }, "Book deleted successfully");

    return res.status(200).json({
      success: true,
      message: "Book and its chapters deleted successfully",
    });
  } catch (error) {
    logger.error({ err: error, bookId: req.params.id }, "Error deleting book");
    return res.status(500).json({
      success: false,
      message: "Internal server error while deleting book",
    });
  }
};

// GET /api/books/:id/chapters
export const getChapters = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id, 10);

    const book = await prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    const chapters = await prisma.bookChapter.findMany({
      where: { bookId },
      orderBy: [
        { sortOrder: "asc" },
        { chapterNumber: "asc" },
      ],
    });

    return res.status(200).json({
      success: true,
      data: chapters,
    });
  } catch (error) {
    logger.error({ err: error, bookId: req.params.id }, "Error fetching chapters");
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching chapters",
    });
  }
};

// POST /api/books/:id/chapters
export const createChapter = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id, 10);
    const { chapterNumber, title, pdfUrl, sortOrder } = req.body;

    const book = await prisma.book.findUnique({
      where: { id: bookId },
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    // Check if duplicate chapterNumber
    const existingChapter = await prisma.bookChapter.findFirst({
      where: {
        bookId,
        chapterNumber: parseInt(chapterNumber, 10),
      },
    });

    if (existingChapter) {
      return res.status(409).json({
        success: false,
        message: `Chapter number ${chapterNumber} already exists in this book`,
      });
    }

    const chapter = await prisma.bookChapter.create({
      data: {
        bookId,
        chapterNumber: parseInt(chapterNumber, 10),
        title,
        pdfUrl: pdfUrl || null,
        sortOrder: sortOrder !== undefined ? parseInt(sortOrder, 10) : 0,
      },
    });

    logger.info({ chapterId: chapter.id, bookId, adminId: req.user.id }, "Chapter created successfully");

    return res.status(201).json({
      success: true,
      message: "Chapter created successfully",
      data: chapter,
    });
  } catch (error) {
    logger.error({ err: error, bookId: req.params.id }, "Error creating chapter");
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating chapter",
    });
  }
};

// PUT /api/chapters/:id
export const updateChapter = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { chapterNumber, title, pdfUrl, sortOrder } = req.body;

    const existingChapter = await prisma.bookChapter.findUnique({
      where: { id },
    });

    if (!existingChapter) {
      return res.status(404).json({
        success: false,
        message: "Chapter not found",
      });
    }

    const updateData = {};
    if (chapterNumber !== undefined) {
      const newNum = parseInt(chapterNumber, 10);
      // Check if different and duplicate
      if (newNum !== existingChapter.chapterNumber) {
        const duplicate = await prisma.bookChapter.findFirst({
          where: {
            bookId: existingChapter.bookId,
            chapterNumber: newNum,
          },
        });
        if (duplicate) {
          return res.status(409).json({
            success: false,
            message: `Chapter number ${newNum} already exists in this book`,
          });
        }
      }
      updateData.chapterNumber = newNum;
    }

    if (title !== undefined) updateData.title = title;
    if (pdfUrl !== undefined) updateData.pdfUrl = pdfUrl;
    if (sortOrder !== undefined) updateData.sortOrder = parseInt(sortOrder, 10);

    const updatedChapter = await prisma.bookChapter.update({
      where: { id },
      data: updateData,
    });

    logger.info({ chapterId: id, adminId: req.user.id }, "Chapter updated successfully");

    return res.status(200).json({
      success: true,
      message: "Chapter updated successfully",
      data: updatedChapter,
    });
  } catch (error) {
    logger.error({ err: error, chapterId: req.params.id }, "Error updating chapter");
    return res.status(500).json({
      success: false,
      message: "Internal server error while updating chapter",
    });
  }
};

// DELETE /api/chapters/:id
export const deleteChapter = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const existingChapter = await prisma.bookChapter.findUnique({
      where: { id },
    });

    if (!existingChapter) {
      return res.status(404).json({
        success: false,
        message: "Chapter not found",
      });
    }

    await prisma.bookChapter.delete({
      where: { id },
    });

    logger.info({ chapterId: id, adminId: req.user.id }, "Chapter deleted successfully");

    return res.status(200).json({
      success: true,
      message: "Chapter deleted successfully",
    });
  } catch (error) {
    logger.error({ err: error, chapterId: req.params.id }, "Error deleting chapter");
    return res.status(500).json({
      success: false,
      message: "Internal server error while deleting chapter",
    });
  }
};

// GET /api/books/class/:classId
export const getBooksByClass = async (req, res) => {
  try {
    const classId = parseInt(req.params.classId, 10);

    if (isNaN(classId) || classId < 1 || classId > 12) {
      return res.status(400).json({
        success: false,
        message: "Invalid Class ID. Must be an integer between 1 and 12",
      });
    }

    const books = await prisma.book.findMany({
      where: { classId },
      include: {
        _count: {
          select: { chapters: true },
        },
      },
      orderBy: {
        sortOrder: "asc",
      },
    });

    const mappedBooks = books.map((book) => ({
      ...book,
      image: book.coverImageUrl || "/bookcover.png",
      chapterCount: book._count.chapters,
    }));

    return res.status(200).json({
      success: true,
      data: mappedBooks,
    });
  } catch (error) {
    logger.error({ err: error, classId: req.params.classId }, "Error fetching books by class");
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching books by class",
    });
  }
};
