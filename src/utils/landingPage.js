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

        .grid {
            display: flex;
            flex-direction: column;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 48px;
            background: var(--bg-color);
        }

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-color);
            transition: background 0.15s ease;
        }

        .row:last-child {
            border-bottom: none;
        }

        .row:hover {
            background: var(--hover-bg);
        }

        .row-label {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-main);
        }

        .row-value {
            font-size: 14px;
            color: var(--text-muted);
            font-variant-numeric: tabular-nums;
        }

        .dark-guide-box {
            margin-top: 24px;
            margin-bottom: 48px;
            padding: 24px;
            background: #000000;
            color: #ffffff;
            border-radius: 8px;
        }

        .dark-guide-box h2 {
            font-size: 18px;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 1px solid #333333;
            color: #ffffff;
        }

        .dark-guide-steps {
            list-style-position: inside;
            color: #a1a1aa;
            font-size: 15px;
            line-height: 1.6;
            padding-left: 0;
        }

        .dark-guide-steps li {
            margin-bottom: 12px;
        }

        .dark-guide-steps li:last-child {
            margin-bottom: 0;
        }

        .dark-guide-steps strong {
            color: #ffffff;
        }

        .dark-code {
            background: #333333;
            color: #ffffff;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 13px;
            border: 1px solid #444444;
        }

        .pipeline {
            margin-top: 24px;
            margin-bottom: 40px;
            border-left: 2px solid var(--border-color);
            padding-left: 24px;
            margin-left: 8px;
        }
        
        .pipeline-step {
            position: relative;
            margin-bottom: 24px;
        }
        
        .pipeline-step:last-child {
            margin-bottom: 0;
        }
        
        .pipeline-step::before {
            content: '';
            position: absolute;
            left: -31px;
            top: 4px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #000;
            border: 2px solid #fff;
        }

        .pipeline-title {
            font-weight: 600;
            font-size: 15px;
            color: var(--text-main);
            margin-bottom: 4px;
        }

        .pipeline-desc {
            font-size: 14px;
            color: var(--text-muted);
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
        <p class="lead" style="margin-bottom: 24px;">Standard operating procedures for creating new APIs within this repository.</p>

        <div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 12px 16px; margin-bottom: 32px; border-radius: 4px;">
            <p style="color: #b91c1c; margin: 0; font-size: 14px; font-weight: 500;">
                <strong>WARNING:</strong> This documentation is for authorized personnel only. Outsiders must leave this page immediately.
            </p>
        </div>

        <div class="grid">
            <div class="row">
                <div class="row-label">Environment</div>
                <div class="row-value">Development</div>
            </div>
            <div class="row">
                <div class="row-label">Version</div>
                <div class="row-value">1.0.0</div>
            </div>
            <div class="row">
                <div class="row-label">Server Status</div>
                <div class="row-value" style="color: var(--text-main); font-weight: 500;">Healthy</div>
            </div>
            <div class="row">
                <div class="row-label">Database Status</div>
                <div class="row-value" style="color: ${dbConnected ? 'var(--text-main)' : '#ff0000'}; font-weight: 500;">
                    ${dbConnected ? 'Connected' : 'Disconnected'}
                </div>
            </div>
            <div class="row">
                <div class="row-label">Uptime</div>
                <div class="row-value" id="uptime">Loading...</div>
            </div>
        </div>

        <a href="/api-docs" class="button" style="margin-bottom: 24px;">View Swagger API Documentation</a>

        <div class="dark-guide-box">
            <h2>Swagger Testing Guide</h2>
            <ol class="dark-guide-steps">
                <li>Click <strong>View Swagger API Documentation</strong> above to open Swagger.</li>
                <li>Scroll down to the <strong>Auth</strong> section and open <code>POST /api/auth/login</code>.</li>
                <li>Click <strong>Try it out</strong> and log in with the test credentials:<br>
                    <span style="display: inline-block; margin-top: 8px;">
                        Email: <span class="dark-code">admin@example.com</span><br>
                        Password: <span class="dark-code">password123</span>
                    </span>
                </li>
                <li>Click <strong>Execute</strong>. Swagger will securely save your login cookie.</li>
                <li>Scroll through the <strong>Books</strong>, <strong>Chapters</strong>, <strong>Notices</strong>, <strong>Generic Sections &amp; Gallery</strong>, <strong>Settings &amp; Registry</strong>, <strong>Uploads</strong>, and <strong>Directory</strong> sections, read the instructions, and start testing!</li>
            </ol>
        </div>

        <h2>API Modules</h2>
        <p style="margin-bottom: 16px;">The backend currently exposes 40 endpoints across the following modules. Full request and response details are in the Swagger documentation.</p>

        <div class="grid">
            <div class="row">
                <div class="row-label">Auth</div>
                <div class="row-value"><code>/api/auth</code> &middot; 5 endpoints</div>
            </div>
            <div class="row">
                <div class="row-label">Books</div>
                <div class="row-value"><code>/api/books</code> &middot; 6 endpoints</div>
            </div>
            <div class="row">
                <div class="row-label">Chapters</div>
                <div class="row-value"><code>/api/books/:id/chapters</code>, <code>/api/chapters/:id</code> &middot; 4 endpoints</div>
            </div>
            <div class="row">
                <div class="row-label">Notices</div>
                <div class="row-value"><code>/api/notices</code> &middot; 5 endpoints &middot; docs pending (issue #10)</div>
            </div>
            <div class="row">
                <div class="row-label">Generic Sections &amp; Gallery</div>
                <div class="row-value"><code>/api/sections</code>, <code>/api/admin/sections</code> &middot; 6 endpoints</div>
            </div>
            <div class="row">
                <div class="row-label">Settings &amp; Registry</div>
                <div class="row-value"><code>/api/settings</code>, <code>/api/admin/settings</code> &middot; 5 endpoints</div>
            </div>
            <div class="row">
                <div class="row-label">Uploads</div>
                <div class="row-value"><code>/api/uploads</code> &middot; 4 endpoints</div>
            </div>
            <div class="row">
                <div class="row-label">Directory</div>
                <div class="row-value"><code>/api/getDirectory/:type</code>, <code>/api/admin/*DirectoryRow/:type</code> &middot; 5 endpoints &middot; docs pending (issue #10)</div>
            </div>
        </div>

        <h2>Architecture Overview (The Data Pipeline)</h2>
        <p style="margin-bottom: 16px;">This backend utilizes the Express.js framework integrated with Prisma ORM. Before writing code, you must understand how data travels through our files. Do not skip any of these steps:</p>

        <div class="pipeline">
            <div class="pipeline-step">
                <div class="pipeline-title">1. Client Request</div>
                <div class="pipeline-desc">A browser, mobile app, or Swagger sends an HTTP Request.</div>
            </div>
            <div class="pipeline-step">
                <div class="pipeline-title">2. Routes <code>(src/routes/)</code></div>
                <div class="pipeline-desc">The router catches the URL and passes it to the correct middleware.</div>
            </div>
            <div class="pipeline-step">
                <div class="pipeline-title">3. Validators <code>(src/validators/)</code></div>
                <div class="pipeline-desc">Ensures the incoming data is safe and properly formatted before proceeding.</div>
            </div>
            <div class="pipeline-step">
                <div class="pipeline-title">4. Controllers <code>(src/controllers/)</code></div>
                <div class="pipeline-desc">Executes the core business logic. This is where the heavy lifting happens.</div>
            </div>
            <div class="pipeline-step">
                <div class="pipeline-title">5. Prisma <code>(src/config/db.js)</code></div>
                <div class="pipeline-desc">Talks to the MySQL Database to fetch or save the data safely.</div>
            </div>
            <div class="pipeline-step">
                <div class="pipeline-title">6. Response</div>
                <div class="pipeline-desc">A standard JSON response is sent back to the client.</div>
            </div>
        </div>

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

    <script>
        let uptime = ${Math.floor(uptimeSeconds)};
        
        const updateUptime = () => {
            const h = Math.floor(uptime / 3600);
            const m = Math.floor((uptime % 3600) / 60);
            const s = uptime % 60;
            
            const pad = (num) => num.toString().padStart(2, '0');
            const uptimeEl = document.getElementById('uptime');
            if (uptimeEl) {
                uptimeEl.textContent = \`\${h}:\${pad(m)}:\${pad(s)}\`;
            }
        };

        updateUptime();
        setInterval(() => {
            uptime++;
            updateUptime();
        }, 1000);
    </script>
</body>
</html>
  `;
};
