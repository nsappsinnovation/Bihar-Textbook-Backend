# Bihar Text Book Publication Backend

**WARNING: This is a strictly confidential project. If you are not an authorized contributor or part of this project, please leave this repository immediately.**

This is the backend server for the Bihar Text Book Publication Corporation (BSTBPC) Admin Panel. It is built using Node.js, Express, and Prisma ORM connected to a remote MySQL database hosted on Aiven Cloud. The project focuses on clean architecture, robust environment variable validation, secure authentication, and professional logging.

---

## Project Structure

```
btbp-backend/
├── server.js                          # Application entry point
├── package.json
├── .env                               # Environment variables (not committed)
├── prisma/
│   └── schema.prisma                  # Database schema (9 tables)
└── src/
    ├── config/
    │   ├── db.js                      # Prisma Client singleton & DB connection
    │   └── env.js                     # Environment variable validation
    ├── controllers/
    │   └── authController.js          # Authentication logic (signup, login, logout, me, profile)
    ├── middlewares/
    │   ├── auth.js                    # JWT authentication middleware
    │   ├── errorHandler.js            # Global error handler
    │   ├── rateLimiter.js             # Login rate limiting
    │   └── validateRequest.js         # Request validation error formatter
    ├── routes/
    │   └── authRoutes.js              # Auth route definitions
    ├── validators/
    │   └── authValidators.js          # Input validation rules for auth endpoints
    ├── services/                      # (Empty — for future business logic)
    ├── utils/
    │   ├── logger.js                  # Centralized pino logger instance
    │   ├── terminal.js                # Terminal output formatting (spinner, box, colors)
    │   └── landingPage.js             # HTML for the root route status page
    └── generated/
        └── prisma/                    # Auto-generated Prisma Client (do not edit)
```

---

## All JavaScript Files and Their Purpose

### Root

#### server.js
The main entry point of the application. It initializes Express, sets up all middleware (CORS, JSON parsing, cookie parsing, pino-http logging), registers all API routes, attaches the global error handler, connects to the database, and starts the HTTP server. On startup it prints a clean, professional status box to the terminal.

---

### src/config/

#### db.js
Creates a single shared instance of the Prisma Client and exports it. The `connectDB()` function tests the database connection on startup and logs the result using pino. Every controller imports this same instance instead of creating their own, which prevents unnecessary database connections.

#### env.js
Validates all environment variables at startup using the `envalid` library. If any required variable (like `DATABASE_URL` or `JWT_SECRET`) is missing or invalid, the server crashes immediately with a clear error message instead of failing silently later. This is much safer than using `process.env` directly throughout the code.

---

### src/controllers/

#### authController.js
Contains all the authentication business logic. It has 5 exported functions:
- **signup** — Validates input, checks if the email already exists, hashes the password with bcrypt (12 salt rounds), creates a new admin in the database, sets a JWT cookie, and returns the new admin's data.
- **login** — Finds the admin by email, verifies the hashed password, checks if the account is active, sets a JWT cookie, and returns the admin's data.
- **me** — A lightweight auth check that reads the JWT cookie and decodes it without hitting the database. Used by the frontend on every page load to quickly verify if the user is logged in.
- **logout** — Clears the authentication cookie.
- **getProfile** — Fetches the full, up-to-date admin profile from the database (includes phone, avatar, timestamps). Used on the Settings/Profile page.

---

### src/middlewares/

#### auth.js
The JWT authentication middleware. It runs before any protected route. It checks for a token in the `Authorization: Bearer <token>` header first, then falls back to the `token` cookie. It verifies the token using `jsonwebtoken`, queries the database to confirm the admin still exists and is active, and attaches the admin's data to `req.user` so controllers can access it. If the token is missing, expired, or invalid, it returns a 401 Unauthorized response.

#### errorHandler.js
The global error handling middleware. It catches any unhandled errors thrown by controllers or other middleware, logs the full error details using pino, and sends a clean JSON error response to the client. In development mode it includes the stack trace; in production it hides it.

#### rateLimiter.js
Protects the login endpoint from brute-force attacks using `express-rate-limit`. It allows a maximum of 5 login attempts per email address within a 15-minute window. After exceeding the limit, the client receives a "too many attempts" error until the window resets.

#### validateRequest.js
A small middleware that collects validation errors from `express-validator`. If any validation rule fails (e.g., email format is wrong, password is too short), it returns the first error message as a 400 Bad Request response instead of letting the request reach the controller.

---

### src/routes/

#### authRoutes.js
Defines all authentication-related API endpoints and wires them to the correct controller functions, validators, and middleware. The routes are:
- `POST /api/auth/signup` — Public. Validates input, then calls signup.
- `POST /api/auth/login` — Public. Rate limited, validates input, then calls login.
- `POST /api/auth/logout` — Public. Clears the auth cookie.
- `GET /api/auth/me` — Protected. Quick auth check from cookie.
- `GET /api/auth/profile` — Protected. Full admin profile from database.

---

### src/validators/

#### authValidators.js
Contains `express-validator` validation chains for auth endpoints:
- **signupValidator** — Requires fullName, a valid email, a strong password (min 8 chars, uppercase, lowercase, number, special character), and a matching confirmPassword.
- **loginValidator** — Requires a valid email and a non-empty password.
- **updatePasswordValidator** — Requires a new strong password (same rules as signup). Reserved for future password change endpoints.

---

### src/utils/

#### logger.js
Creates and exports a single `pino` logger instance configured with `pino-pretty` for colorized, human-readable output in development. Every file in the project imports this same logger instead of using `console.log`, ensuring consistent and structured log output.

#### terminal.js
Contains helper functions for formatting the terminal output during server startup: `printBox` (draws a rounded box), `startSpinner` (shows a loading animation), `printSuccess`, `printError`, `printInfo`, and `printDbStatus`. These keep the main server.js file clean.

#### landingPage.js
Stores the HTML and CSS for the root route (`/`) landing page. It displays a clean, minimalistic black-and-white status page showing the server health and uptime. Keeping this long HTML string in its own file prevents the routing logic from becoming cluttered.

---

## NPM Packages

### Production Dependencies

| Package | Why We Use It |
|---------|--------------|
| **express** | The web framework. Handles HTTP requests, routing, and middleware. |
| **@prisma/client** | The database ORM. Lets us query our MySQL database using JavaScript objects instead of writing raw SQL queries. |
| **bcrypt** | Hashes passwords securely before storing them in the database. Uses a salt to protect against rainbow table attacks. |
| **jsonwebtoken** | Creates and verifies JWT (JSON Web Tokens) for authentication. The token is signed with our secret key and stored in an HttpOnly cookie. |
| **cookie-parser** | Parses cookies from incoming HTTP requests so we can read the JWT token stored in the `token` cookie. |
| **cors** | Enables Cross-Origin Resource Sharing so our frontend application (running on localhost:5173) can make API requests to this backend without being blocked by the browser. |
| **dotenv** | Loads environment variables from the `.env` file into `process.env` so we can keep secrets like database passwords out of our code. |
| **envalid** | Strictly validates that all required environment variables exist and are the correct type on startup. If `DATABASE_URL` or `JWT_SECRET` is missing, the server will crash immediately with a helpful error instead of failing later. |
| **express-validator** | Validates and sanitizes incoming request data (e.g., checks that email is a valid format, password meets strength requirements) before it reaches the controller. |
| **express-rate-limit** | Prevents brute-force login attacks by limiting the number of login attempts per email to 5 within a 15-minute window. |
| **pino** | A fast, structured JSON logger. We use it instead of `console.log` for all server logs because it provides timestamps, log levels, and structured data. |
| **pino-http** | Automatically logs every incoming HTTP request and its response using pino. Shows the method, URL, status code, and response time for every API call. |
| **chalk** | Adds colors to terminal output (e.g., green for success, red for errors) to make the startup logs easier to read at a glance. |
| **boxen** | Draws a nice rounded box around the server status information in the terminal during startup. |
| **ora** | Displays a loading spinner animation in the terminal while the server is connecting to the database during startup. |
| **mysql2** | The underlying MySQL driver that Prisma uses internally to communicate with our Aiven Cloud MySQL database. |
| **swagger-jsdoc** | Generates Swagger/OpenAPI documentation from JSDoc comments in our route files. |
| **swagger-ui-express** | Serves an interactive Swagger UI page at `/api-docs` where developers can browse and test all API endpoints directly in the browser. |
| **zod** | A schema validation library. Available for use in future endpoints where we may need programmatic (non-middleware) validation. |
| **nodemon** | Automatically restarts the server whenever a file changes during development. Saves us from manually stopping and restarting after every code edit. |

### Dev Dependencies

| Package | Why We Use It |
|---------|--------------|
| **prisma** | The Prisma CLI tool. Used to generate the Prisma Client, push schema changes to the database, and run migrations. Only needed during development. |
| **pino-pretty** | Formats pino's JSON log output into colorized, human-readable lines in the terminal during development. Not used in production. |

---

## Running the Server

1. Install the required dependencies: `npm install`
2. Copy the `.env.example` file to `.env` and fill in your `DATABASE_URL` and `JWT_SECRET`.
3. Generate the Prisma Client: `npx prisma generate`
4. Push the schema to your database: `npx prisma db push`
5. Start the server: `nodemon server.js`

## API Documentation

Swagger API documentation is integrated into the project. When the server is running, you can access the interactive API documentation at the `/api-docs` route.
