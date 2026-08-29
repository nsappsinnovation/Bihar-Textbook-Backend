export const getLandingPageHtml = (uptimeSeconds, dbConnected = false) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backend Documentation</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #ffffff;
            --text-main: #000000;
            --text-muted: #666666;
            --border-color: #eaeaea;
            --code-bg: #fafafa;
            --hover-bg: #f5f5f5;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        header {
            border-bottom: 1px solid var(--border-color);
            padding: 24px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-title {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: -0.02em;
        }

        .status-indicator {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--text-muted);
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background-color: #000000;
            border-radius: 50%;
        }

        main {
            max-width: 800px;
            margin: 0 auto;
            padding: 48px 24px;
        }

        h1 {
            font-size: 32px;
            font-weight: 600;
            letter-spacing: -0.04em;
            margin-bottom: 16px;
        }

        p.lead {
            color: var(--text-muted);
            font-size: 16px;
            margin-bottom: 48px;
        }

        h2 {
            font-size: 20px;
            font-weight: 600;
            margin-top: 48px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--border-color);
        }

        h3 {
            font-size: 16px;
            font-weight: 600;
            margin-top: 24px;
            margin-bottom: 12px;
        }

        p, ul, ol {
            color: var(--text-muted);
            margin-bottom: 16px;
            font-size: 15px;
        }

        ul, ol {
            padding-left: 24px;
        }

        li {
            margin-bottom: 8px;
        }

        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 13px;
            background: var(--code-bg);
            padding: 2px 6px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--text-main);
        }

        pre {
            background: var(--code-bg);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 16px;
            overflow-x: auto;
            margin-bottom: 24px;
        }

        pre code {
            background: transparent;
            padding: 0;
            border: none;
            color: var(--text-main);
            font-size: 13px;
        }

        .button {
            display: inline-block;
            background: var(--text-main);
            color: var(--bg-color);
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            transition: opacity 0.2s;
        }

        .button:hover {
            opacity: 0.8;
        }

        .do-not-do {
            border-left: 4px solid #000;
            background: var(--code-bg);
            padding: 16px;
            margin-bottom: 24px;
        }

        .do-not-do ul {
            margin-bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <div class="header-title">Bihar Text Book Publication</div>
        <div class="status-indicator">
            <div class="status-dot"></div>
            System Online
        </div>
    </header>

    <main>
        <h1>Backend Development Guide</h1>
        <p class="lead">Standard operating procedures for creating new APIs within this repository.</p>

        <a href="/api-docs" class="button">View Swagger API Documentation</a>

        <h2>Architecture Overview</h2>
        <p>This backend utilizes the Express.js framework integrated with Prisma ORM. The structure is separated by concerns. When building a new feature, interaction is required with three main layers: Routes, Controllers, and Validators.</p>
        
        <ul>
            <li><code>src/routes/</code>: Defines the URL paths and attaches middleware.</li>
            <li><code>src/validators/</code>: Defines the validation rules for incoming request bodies or queries.</li>
            <li><code>src/controllers/</code>: Contains the actual business logic and database interactions.</li>
        </ul>

        <h2>Step-by-Step API Creation</h2>

        <h3>1. Database Schema</h3>
        <p>If your API requires a new table, add the model to <code>prisma/schema.prisma</code>. After adding it, you must format and generate the client:</p>
        <pre><code>npx prisma format
npx prisma db push
npx prisma generate</code></pre>
        <p>Always include table mappings like <code>@@map("table_names")</code> and column mappings like <code>@map("column_name")</code> to keep the database snake_case while the JavaScript code remains camelCase.</p>

        <h3>2. Validators</h3>
        <p>Create a validation array in <code>src/validators/</code> using <code>express-validator</code>. This ensures invalid data never reaches the controller.</p>
        <pre><code>import { body } from "express-validator";

export const createItemValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 255 }),
];</code></pre>

        <h3>3. Controllers</h3>
        <p>Write the business logic in <code>src/controllers/</code>. Every controller must be an asynchronous function wrapped in a try/catch block.</p>
        <pre><code>import prisma from "../config/db.js";
import logger from "../utils/logger.js";

export const createItem = async (req, res) => {
  try {
    const { title } = req.body;

    const item = await prisma.item.create({
      data: { title }
    });

    logger.info({ itemId: item.id }, "Item created successfully");

    return res.status(201).json({
      success: true,
      message: "Item created",
      data: item
    });
  } catch (error) {
    logger.error({ err: error }, "Error creating item");
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};</code></pre>

        <h3>4. Routing and Swagger</h3>
        <p>Register the route in <code>src/routes/</code>. Apply the validator, the <code>validateRequest</code> middleware, and your controller. Above the route, write the Swagger JSDoc comment in plain English to assist testers.</p>
        <pre><code>import express from "express";
import { createItem } from "../controllers/itemController.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { createItemValidator } from "../validators/itemValidators.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     description: Detailed instructions for testing here.
 *     tags: [Items]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       201:
 *         description: Item created.
 */
router.post("/", authenticate, createItemValidator, validateRequest, createItem);

export default router;</code></pre>
        <p>Finally, ensure the new route file is mounted inside <code>server.js</code>.</p>

        <h2>Important Rules and Practices</h2>
        <div class="do-not-do">
            <h3>What to do</h3>
            <ul>
                <li>Use <code>logger.info()</code> and <code>logger.error()</code> from <code>src/utils/logger.js</code> for all logging.</li>
                <li>Import Prisma exclusively from <code>src/config/db.js</code>.</li>
                <li>Return standard JSON responses with <code>success</code>, <code>message</code>, and <code>data</code> fields.</li>
                <li>Write plain English testing instructions in your Swagger documentation.</li>
            </ul>
            <br>
            <h3>What NOT to do</h3>
            <ul>
                <li>Do not use <code>console.log()</code> anywhere in the application.</li>
                <li>Do not import <code>@prisma/client</code> directly into your controllers.</li>
                <li>Do not send raw error traces or database errors back in the HTTP response. Keep the client response generic and log the real error using Pino.</li>
                <li>Do not put business logic directly inside the route definition file.</li>
            </ul>
        </div>

    </main>
</body>
</html>
  `;
};
