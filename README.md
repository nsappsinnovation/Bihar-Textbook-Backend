# Bihar Text Book Publication Backend

**WARNING: This is a strictly confidential project. If you are not an authorized contributor or part of this project, please leave this repository immediately.**

This is the backend server for the Bihar Text Book Publication project. It is built using Node.js and Express. The project focuses on having a clean architecture, robust environment variable validation, and a professional terminal and web interface.

## Architecture and Utility Files

During the setup of this project, we created several utility files to ensure the backend is secure, easy to monitor, and professional. Here is an explanation of these files:

### src/config/env.js
This file handles the validation of our environment variables. Instead of using process.env directly throughout the application, we use the envalid library to load and strictly validate our configuration. This ensures that the server will fail immediately on startup if a required variable (like a database connection string or a secret key) is missing. This prevents the application from failing silently or causing unexpected behavior later.

### src/utils/terminal.js
This file contains the logic for formatting our console output. When the server starts, it prints a clean, organized, and professional text layout in the terminal without cluttering the main server file. We extracted this logic into its own file so that the core server code remains focused solely on starting the application. 

### src/utils/landingPage.js
This file stores the HTML and CSS for our root route landing page. We designed a clean, minimalistic black-and-white status page that displays the server health and uptime. Keeping this long HTML string in a separate utility file prevents our routing logic from becoming difficult to read.

## Running the Server

1. Install the required dependencies using your package manager.
2. Copy the .env.example file to a new file named .env and update the values.
3. Start the server using the start command or use nodemon for local development.

## API Documentation

Swagger API documentation is integrated into the project. When the server is running, you can access the interactive API documentation at the /api-docs route.
