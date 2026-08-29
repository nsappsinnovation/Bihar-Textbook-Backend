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
 *     description: Testing endpoints for Books (CRUD operations)
 *   - name: Chapters
 *     description: Testing endpoints for Book Chapters
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: 1. Get all Books (with Pagination)
 *     description: |
 *       **For Testers:** Use this endpoint to see the list of all books. 
 *       
 *       **How to test:**
 *       1. Click **Try it out**.
 *       2. Scroll down and click **Execute** to see all books.
 *       3. To test pagination, type `1` in the `page` box and `5` in the `limit` box. You should only get 5 books back!
 *       4. To test filtering, type `10` in the `classId` box to see only Class 10 books.
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number (e.g., 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of books per page (e.g., 10)
 *       - in: query
 *         name: classId
 *         schema:
 *           type: integer
 *         description: Filter by class (e.g., 10)
 *       - in: query
 *         name: subject
 *         schema:
 *           type: string
 *         description: Filter by subject (e.g., Science)
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [Published, Draft]
 *         description: Filter by status
 *     responses:
 *       200:
 *         description: Successfully fetched the books.
 */
router.get("/books", getBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: 2. Get a single Book's details
 *     description: |
 *       **For Testers:** Use this to view the full details of ONE specific book, including all its chapters!
 *       
 *       **How to test:**
 *       1. Find an ID from the GET /api/books response above.
 *       2. Click **Try it out** here.
 *       3. Enter that ID into the `id` box.
 *       4. Click **Execute**. You should see the book details and an array of its chapters inside the response.
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The unique ID of the book
 *     responses:
 *       200:
 *         description: Successfully fetched the book.
 *       404:
 *         description: Book not found.
 */
router.get("/books/:id", getBookById);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: 3. Create a new Book (Requires Login)
 *     description: |
 *       **For Testers:** Use this to add a brand new book to the database. 
 *       *Note: You must be logged in as an admin for this to work!*
 *       
 *       **How to test:**
 *       1. Click **Try it out**.
 *       2. In the Request body, change the JSON text. Make sure you provide at least a `title` (e.g., "Math Magic") and a `classId` (e.g., 5).
 *       3. Click **Execute**.
 *       4. If you get a 401 error, it means you aren't logged in. Go to the Auth endpoints and log in first!
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
 *                 example: "Math Magic Vol 1"
 *               classId:
 *                 type: integer
 *                 example: 5
 *               subject:
 *                 type: string
 *                 example: "Mathematics"
 *               board:
 *                 type: string
 *                 example: "Bihar Board"
 *               coverImageUrl:
 *                 type: string
 *                 example: "https://example.com/cover.jpg"
 *               description:
 *                 type: string
 *                 example: "A great book for learning math."
 *               status:
 *                 type: string
 *                 enum: [Published, Draft]
 *                 example: "Published"
 *               sortOrder:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Book created successfully.
 *       400:
 *         description: Validation error (e.g., missing title).
 */
router.post("/books", authenticate, createBookValidator, validateRequest, createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: 4. Update an existing Book (Requires Login)
 *     description: |
 *       **For Testers:** Use this to change information about a book.
 *       
 *       **How to test:**
 *       1. Click **Try it out**.
 *       2. Enter a valid Book ID in the `id` box.
 *       3. In the Request body, you can delete lines you don't want to update. Try updating just the `title`.
 *       4. Click **Execute** and check if the title changed!
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
 *       200:
 *         description: Book updated successfully.
 */
router.put("/books/:id", authenticate, updateBookValidator, validateRequest, updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: 5. Delete a Book (Requires Login)
 *     description: |
 *       **For Testers:** Use this to completely delete a book. 
 *       **Magic Trick:** Because of "Cascade Deletion", if you delete a book, ALL of its chapters will also be automatically deleted from the database!
 *       
 *       **How to test:**
 *       1. Create a dummy book using the POST endpoint, and remember its ID.
 *       2. Click **Try it out** here and enter that ID.
 *       3. Click **Execute**. The book should be gone!
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
 *         description: Book deleted successfully.
 */
router.delete("/books/:id", authenticate, deleteBook);

/**
 * @swagger
 * /api/books/{id}/chapters:
 *   get:
 *     summary: 6. Get all Chapters for a Book
 *     description: |
 *       **For Testers:** Use this to see all the chapters that belong to a specific book.
 *       
 *       **How to test:**
 *       1. Click **Try it out**.
 *       2. Enter a valid Book ID.
 *       3. Click **Execute** to see the list of its chapters.
 *     tags: [Chapters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully fetched the chapters.
 */
router.get("/books/:id/chapters", getChapters);

/**
 * @swagger
 * /api/books/{id}/chapters:
 *   post:
 *     summary: 7. Add a Chapter to a Book (Requires Login)
 *     description: |
 *       **For Testers:** Add a new chapter to an existing book.
 *       
 *       **How to test:**
 *       1. Click **Try it out**.
 *       2. Enter the Book ID in the path.
 *       3. Enter `chapterNumber` (e.g., 1) and `title` (e.g., "Introduction") in the body.
 *       4. Click **Execute**.
 *       **Important Rule:** Try to add another chapter with the SAME `chapterNumber` to the same book. The server should reject it and give you an error! This is a great test case.
 *     tags: [Chapters]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the Book you are adding a chapter to.
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
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: "Chapter 1: The Beginning"
 *               pdfUrl:
 *                 type: string
 *                 example: "https://example.com/chapter1.pdf"
 *               sortOrder:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Chapter created.
 */
router.post("/books/:id/chapters", authenticate, createChapterValidator, validateRequest, createChapter);

/**
 * @swagger
 * /api/chapters/{id}:
 *   put:
 *     summary: 8. Update a Chapter (Requires Login)
 *     description: |
 *       **For Testers:** Change the title, PDF link, or number of a specific chapter.
 *       
 *       **How to test:**
 *       1. Click **Try it out**.
 *       2. Enter the **Chapter ID** (NOT the Book ID) in the path.
 *       3. Change the title in the body and hit **Execute**.
 *     tags: [Chapters]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The unique ID of the CHAPTER
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
 *       200:
 *         description: Chapter updated.
 */
router.put("/chapters/:id", authenticate, updateChapterValidator, validateRequest, updateChapter);

/**
 * @swagger
 * /api/chapters/{id}:
 *   delete:
 *     summary: 9. Delete a Chapter (Requires Login)
 *     description: |
 *       **For Testers:** Delete a single chapter from the database.
 *       
 *       **How to test:**
 *       1. Click **Try it out**.
 *       2. Enter the Chapter ID.
 *       3. Click **Execute**. The chapter will be removed!
 *     tags: [Chapters]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The unique ID of the CHAPTER
 *     responses:
 *       200:
 *         description: Chapter deleted.
 */
router.delete("/chapters/:id", authenticate, deleteChapter);

export default router;
