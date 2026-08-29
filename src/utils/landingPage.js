export const getLandingPageHtml = (uptimeSeconds, dbConnected = false) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bihar Text Book Publication</title>
    <!-- Using Inter to mimic Geist/Vercel typography -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #ffffff;
            --text-main: #000000;
            --text-muted: #666666;
            --border-color: #eaeaea;
            --card-bg: #ffffff;
            --hover-bg: #fafafa;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .container {
            width: 100%;
            max-width: 560px;
            padding: 40px 24px;
        }

        .header {
            margin-bottom: 32px;
        }

        h1 {
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.04em;
            margin-bottom: 8px;
        }

        p.subtitle {
            color: var(--text-muted);
            font-size: 14px;
            line-height: 1.5;
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 500;
            padding: 4px 10px;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            margin-bottom: 24px;
            background: var(--card-bg);
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background-color: #000000;
            border-radius: 50%;
        }

        .grid {
            display: flex;
            flex-direction: column;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            overflow: hidden;
        }

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-color);
            background: var(--card-bg);
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

        .footer {
            margin-top: 32px;
            font-size: 13px;
            color: var(--text-muted);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid var(--border-color);
            padding-top: 24px;
        }

        .docs-link {
            color: var(--text-main);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .docs-link:hover {
            color: var(--text-muted);
        }

        .guide-box {
            margin-top: 32px;
            padding: 24px;
            background: var(--hover-bg);
            border: 1px solid var(--border-color);
            border-radius: 8px;
        }

        .guide-box h2 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .guide-steps {
            list-style-position: inside;
            color: var(--text-muted);
            font-size: 14px;
            line-height: 1.6;
        }

        .guide-steps li {
            margin-bottom: 12px;
        }

        .guide-steps li:last-child {
            margin-bottom: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="status-badge">
            <div class="status-dot"></div>
            System Operational
        </div>

        <div class="header">
            <h1>Bihar Text Book Publication</h1>
            <p class="subtitle">The backend server infrastructure is currently running.</p>
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

        <div class="guide-box">
            <h2>API Testing Guide</h2>
            <ol class="guide-steps">
                <li>Click <strong>View API Documentation</strong> below to open Swagger.</li>
                <li>Scroll down to the <strong>Auth</strong> section and open <code>POST /api/auth/login</code>.</li>
                <li>Click <strong>Try it out</strong> and log in with:<br>
                    <span style="display: inline-block; margin-top: 8px;">
                        Email: <code style="background: #eaeaea; padding: 2px 6px; border-radius: 4px; color: #000;">admin@example.com</code><br>
                        Password: <code style="background: #eaeaea; padding: 2px 6px; border-radius: 4px; color: #000;">password123</code>
                    </span>
                </li>
                <li>Click <strong>Execute</strong>. Swagger will securely save your login cookie.</li>
                <li>Scroll up to the <strong>Books</strong> and <strong>Chapters</strong> sections, read the instructions, and start testing!</li>
            </ol>
        </div>

        <div class="footer">
            <div>&copy; <span id="year"></span> Bihar Text Book Publication</div>
            <a href="/api-docs" class="docs-link">View API Documentation &rarr;</a>
        </div>
    </div>

    <script>
        document.getElementById('year').textContent = new Date().getFullYear();
        
        let uptime = ${Math.floor(uptimeSeconds)};
        
        const updateUptime = () => {
            const h = Math.floor(uptime / 3600);
            const m = Math.floor((uptime % 3600) / 60);
            const s = uptime % 60;
            
            // Format to have leading zeros for a cleaner tabular-nums look
            const pad = (num) => num.toString().padStart(2, '0');
            document.getElementById('uptime').textContent = \`\${h}:\${pad(m)}:\${pad(s)}\`;
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
