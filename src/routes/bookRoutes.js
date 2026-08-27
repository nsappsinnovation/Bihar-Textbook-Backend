import express from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getChapters,
  createChapter,
  updateChapter,
  deleteChapter,
} from "../controllers/bookController.js";
import { authenticate } from "../middlewares/auth.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import {
  createBookValidator,
  updateBookValidator,
  createChapterValidator,
  updateChapterValidator,
} from "../validators/bookValidators.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Books
 *     description: Books management and catalog endpoints
 *   - name: Chapters
 *     description: Book chapters management and lookup endpoints
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve all books
 *     description: Fetches a list of all textbooks. Can be filtered by class ID, subject, and status.
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: classId
 *         schema:
 *           type: integer
 *         description: Filter books by school class (e.g. 1 to 12)
 *       - in: query
 *         name: subject
 *         schema:
 *           type: string
 *         description: Filter books by subject (e.g. math, hindi, english)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [Published, Draft]
 *         description: Filter by publication status
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       classId:
 *                         type: integer
 *                       subject:
 *                         type: string
 *                       board:
 *                         type: string
 *                       coverImageUrl:
 *                         type: string
 *                       image:
 *                         type: string
 *                       description:
 *                         type: string
 *                       status:
 *                         type: string
 *                       sortOrder:
 *                         type: integer
 *                       chapterCount:
 *                         type: integer
 */
router.get("/books", getBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get book details by ID
 *     description: Fetches a single book with all its chapters ordered.
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique book ID
 *     responses:
 *       200:
 *         description: Book details with chapters list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       404:
 *         description: Book not found
 */
router.get("/books/:id", getBookById);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     description: Inserts a new book into the database. Protected route (Admin only).
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - classId
 *             properties:
 *               title:
 *                 type: string
 *               classId:
 *                 type: integer
 *               subject:
 *                 type: string
 *               board:
 *                 type: string
 *               coverImageUrl:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Published, Draft]
 *               sortOrder:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Book created successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Validation failed
 */
router.post("/books", authenticate, createBookValidator, validateRequest, createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update an existing book
 *     description: Modifies book properties. Protected route (Admin only).
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 */
router.put("/books/:id", authenticate, updateBookValidator, validateRequest, updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Deletes a book and all its associated chapters. Protected route (Admin only).
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book and chapters deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete("/books/:id", authenticate, deleteBook);

/**
 * @swagger
 * /api/books/{id}/chapters:
 *   get:
 *     summary: List chapters for a book
 *     description: Retrieves all chapters for a specific book, ordered by chapter number / sort order.
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of chapters
 *       404:
 *         description: Book not found
 */
router.get("/books/:id/chapters", getChapters);

/**
 * @swagger
 * /api/books/{id}/chapters:
 *   post:
 *     summary: Create a new chapter for a book
 *     description: Appends a chapter to the specified book. Protected route (Admin only).
 *     tags: [Chapters]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - chapterNumber
 *               - title
 *             properties:
 *               chapterNumber:
 *                 type: integer
 *               title:
 *                 type: string
 *               pdfUrl:
 *                 type: string
 *               sortOrder:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Chapter created successfully
 *       409:
 *         description: Chapter number already exists for this book
 */
router.post("/books/:id/chapters", authenticate, createChapterValidator, validateRequest, createChapter);

/**
 * @swagger
 * /api/chapters/{id}:
 *   put:
 *     summary: Update an existing chapter
 *     description: Modifies an existing chapter. Protected route (Admin only).
 *     tags: [Chapters]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Chapter updated successfully
 *       404:
 *         description: Chapter not found
 */
router.put("/chapters/:id", authenticate, updateChapterValidator, validateRequest, updateChapter);

/**
 * @swagger
 * /api/chapters/{id}:
 *   delete:
 *     summary: Delete a chapter
 *     description: Deletes a chapter by its ID. Protected route (Admin only).
 *     tags: [Chapters]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chapter deleted successfully
 *       404:
 *         description: Chapter not found
 */
router.delete("/chapters/:id", authenticate, deleteChapter);

export default router;
