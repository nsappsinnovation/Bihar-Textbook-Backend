// routes/authRoutes.js
import express from "express";
import {
  signup,
  login,
  logout,
  getProfile,
  me,
} from "../controllers/authController.js";
import { authenticate } from "../middlewares/auth.js";
import { loginRateLimiter } from "../middlewares/rateLimiter.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import {
  signupValidator,
  loginValidator,
} from "../validators/authValidators.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: |
 *     Authentication & Authorization API for the BTBP Admin Panel.
 *
 *     **How Authentication Works (for Frontend Developers):**
 *
 *     1. When an admin logs in via `/api/auth/login`, the server sets an **HttpOnly cookie** named `token` containing a JWT. This cookie is automatically sent by the browser with every subsequent request — you do NOT need to manually attach it.
 *
 *     2. For your frontend (React/Vite), make sure your API client (Axios or Fetch) is configured with `credentials: 'include'` (Fetch) or `withCredentials: true` (Axios). This tells the browser to send cookies cross-origin.
 *
 *     3. On every page load, call `GET /api/auth/me` to check if the admin is still logged in. If it returns 401, redirect to the login page.
 *
 *     4. For protected routes (like `/api/auth/profile`), the cookie is sent automatically — no `Authorization` header is needed.
 *
 *     **Axios Example Setup:**
 *     ```javascript
 *     import axios from 'axios';
 *     const api = axios.create({
 *       baseURL: 'http://localhost:3000',
 *       withCredentials: true,
 *     });
 *     ```
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new admin
 *     description: |
 *       Creates a new admin account in the database. The password is hashed with bcrypt (12 salt rounds) before storage.
 *
 *       **Frontend Integration:**
 *       - Call this from your Signup/Register page form.
 *       - On success (201), the server automatically sets the JWT cookie — the admin is immediately logged in.
 *       - Redirect the admin to the Dashboard page after receiving a successful response.
 *       - If you get a 409, show the user a message that this email is already registered.
 *
 *       **Password Requirements:**
 *       - Minimum 8 characters
 *       - At least 1 uppercase letter (A-Z)
 *       - At least 1 lowercase letter (a-z)
 *       - At least 1 number (0-9)
 *       - At least 1 special character (!@#$%^&* etc.)
 *
 *       **Example Axios Call:**
 *       ```javascript
 *       const res = await api.post('/api/auth/signup', {
 *         fullName: 'Aditya Kumar',
 *         email: 'admin@btbp.com',
 *         password: 'Admin@1234',
 *         confirmPassword: 'Admin@1234',
 *         phone: '9876543210'
 *       });
 *       // res.data.user contains { id, fullName, email }
 *       ```
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - email
 *               - password
 *               - confirmPassword
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: The admin's full name. Displayed in the admin panel header and profile page.
 *                 example: "Aditya Kumar"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Must be a valid email. This will be the login username. Automatically converted to lowercase.
 *                 example: "admin@btbp.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: "Must meet all password requirements: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character."
 *                 example: "Admin@1234"
 *               confirmPassword:
 *                 type: string
 *                 format: password
 *                 description: Must exactly match the password field.
 *                 example: "Admin@1234"
 *               phone:
 *                 type: string
 *                 description: Optional. The admin's contact phone number.
 *                 example: "9876543210"
 *     responses:
 *       201:
 *         description: Admin registered successfully. JWT cookie is set automatically.
 *         headers:
 *           Set-Cookie:
 *             description: "HttpOnly JWT cookie named 'token'. Valid for 7 days. Sent automatically by the browser on all subsequent requests."
 *             schema:
 *               type: string
 *               example: "token=eyJhbGciOiJIUzI1NiIs...; HttpOnly; Path=/; Max-Age=604800"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Admin registered successfully"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The unique ID of the newly created admin.
 *                       example: 1
 *                     fullName:
 *                       type: string
 *                       example: "Aditya Kumar"
 *                     email:
 *                       type: string
 *                       example: "admin@btbp.com"
 *       400:
 *         description: |
 *           Validation failed. Possible reasons:
 *           - Full name is empty
 *           - Email is not a valid format
 *           - Password does not meet strength requirements
 *           - confirmPassword does not match password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Password must be at least 8 characters long"
 *       409:
 *         description: An admin with this email address already exists. Show a "try a different email" message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Admin with this email already exists"
 *       500:
 *         description: Internal server error. Log the error and show a generic "something went wrong" message to the user.
 */
router.post("/signup", signupValidator, validateRequest, signup);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login as an admin
 *     description: |
 *       Authenticates an admin using email and password. On success, sets an HttpOnly JWT cookie that lasts 7 days.
 *
 *       **Frontend Integration:**
 *       - Call this from your Login page form.
 *       - On success (200), store the returned `user` object in your React state/context (e.g., Zustand, Redux, or React Context) and redirect to the Dashboard.
 *       - On 401, show "Invalid email or password" — do NOT reveal whether the email or password was wrong specifically (security best practice).
 *       - On 429, show "Too many attempts, please wait 15 minutes."
 *
 *       **Rate Limiting:**
 *       This endpoint is protected by a rate limiter. Each email address is allowed a maximum of **5 login attempts within a 15-minute window**. After exceeding this, the server returns a 429 error until the window resets.
 *
 *       **Example Axios Call:**
 *       ```javascript
 *       const res = await api.post('/api/auth/login', {
 *         email: 'admin@btbp.com',
 *         password: 'Admin@1234'
 *       });
 *       // res.data.user contains { id, fullName, email }
 *       // JWT cookie is set automatically by the browser
 *       ```
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The admin's registered email address.
 *                 example: "admin@btbp.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The admin's password.
 *                 example: "Admin@1234"
 *     responses:
 *       200:
 *         description: Login successful. JWT cookie is set automatically.
 *         headers:
 *           Set-Cookie:
 *             description: "HttpOnly JWT cookie named 'token'. Valid for 7 days."
 *             schema:
 *               type: string
 *               example: "token=eyJhbGciOiJIUzI1NiIs...; HttpOnly; Path=/; Max-Age=604800"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 user:
 *                   type: object
 *                   description: Use this object to populate your app's auth state/context.
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     fullName:
 *                       type: string
 *                       example: "Aditya Kumar"
 *                     email:
 *                       type: string
 *                       example: "admin@btbp.com"
 *       400:
 *         description: Validation error — email or password field is missing or email format is invalid.
 *       401:
 *         description: |
 *           Authentication failed. Possible reasons:
 *           - Email does not exist in the database
 *           - Password is incorrect
 *           - Account has been deactivated by another admin (isActive = false)
 *
 *           **Important:** The error message is intentionally generic ("Invalid email or password") to prevent attackers from discovering valid email addresses.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid email or password"
 *       429:
 *         description: Too many login attempts for this email. The admin must wait 15 minutes before trying again.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Too many login attempts for this account, please try again after 15 minutes"
 *       500:
 *         description: Internal server error.
 */
router.post("/login", loginRateLimiter, loginValidator, validateRequest, login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout the current admin
 *     description: |
 *       Clears the JWT authentication cookie from the browser. After calling this, all subsequent requests will be unauthenticated.
 *
 *       **Frontend Integration:**
 *       - Call this when the admin clicks the "Logout" button.
 *       - On success (200), clear your local auth state/context and redirect to the Login page.
 *       - No request body is needed. No Authorization header is needed.
 *
 *       **Example Axios Call:**
 *       ```javascript
 *       await api.post('/api/auth/logout');
 *       // Clear your auth state
 *       setUser(null);
 *       // Redirect to login
 *       navigate('/login');
 *       ```
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logged out successfully. The "token" cookie has been cleared.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Logged out successfully"
 *       500:
 *         description: Error during logout. This is extremely rare.
 */
router.post("/logout", logout);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Quick authentication check
 *     description: |
 *       A lightweight endpoint that reads the JWT cookie and returns basic admin info **without hitting the database**. This makes it extremely fast.
 *
 *       **Frontend Integration:**
 *       - Call this on **every page load** (e.g., in your App.jsx or a top-level useEffect) to check if the admin is still logged in.
 *       - If it returns 200, the admin is authenticated — populate your auth context with the returned user data.
 *       - If it returns 401, the admin is NOT logged in — redirect to the Login page.
 *       - This endpoint is faster than `/api/auth/profile` because it does NOT query the database. It only decodes the JWT token.
 *
 *       **When to use /me vs /profile:**
 *       | Endpoint | Speed | Data | Use Case |
 *       |----------|-------|------|----------|
 *       | `/me` | ⚡ Instant (no DB) | id, email, fullName | Every page load auth check |
 *       | `/profile` | Normal (DB query) | id, email, fullName, phone, avatar, timestamps | Settings/Profile page |
 *
 *       **Example Axios Call:**
 *       ```javascript
 *       // In your App.jsx or AuthProvider
 *       useEffect(() => {
 *         api.get('/api/auth/me')
 *           .then(res => setUser(res.data.user))
 *           .catch(() => navigate('/login'));
 *       }, []);
 *       ```
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin is authenticated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   type: object
 *                   description: Basic admin info decoded from the JWT. Use this to populate your navbar (e.g., "Welcome, Aditya Kumar").
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     email:
 *                       type: string
 *                       example: "admin@btbp.com"
 *                     fullName:
 *                       type: string
 *                       example: "Aditya Kumar"
 *       401:
 *         description: |
 *           Not authenticated. Possible reasons:
 *           - No JWT cookie found (admin never logged in or cookie expired)
 *           - JWT token is invalid or tampered with
 *           - JWT token has expired (tokens last 7 days)
 *
 *           **Frontend action:** Redirect to the Login page.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Not authenticated"
 */
router.get("/me", authenticate, me);

/**
 * @swagger
 * /api/auth/profile:
 *   get:
 *     summary: Get full admin profile
 *     description: |
 *       Fetches the complete, up-to-date admin profile directly from the database. Returns more fields than `/me` including phone number, avatar URL, active status, and account creation date.
 *
 *       **Frontend Integration:**
 *       - Call this on the **Settings/Profile page** to populate the profile form.
 *       - Do NOT use this for auth checking on every page — use `/me` instead (it's faster).
 *       - The returned data reflects the latest database values. If an admin updates their phone number, this endpoint will return the new value immediately, whereas `/me` would still return the old value from the JWT until they log in again.
 *
 *       **Example Axios Call:**
 *       ```javascript
 *       // On the Settings/Profile page
 *       const res = await api.get('/api/auth/profile');
 *       setProfile(res.data.user);
 *       // res.data.user = { id, fullName, email, phone, avatarUrl, isActive, createdAt }
 *       ```
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Full admin profile fetched from the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   type: object
 *                   description: Complete admin profile. Use this to populate the Settings/Profile page form fields.
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: Unique admin ID.
 *                       example: 1
 *                     fullName:
 *                       type: string
 *                       description: Admin's full name. Pre-fill the "Full Name" input field with this.
 *                       example: "Aditya Kumar"
 *                     email:
 *                       type: string
 *                       description: Admin's email address. Pre-fill the "Email" input field with this.
 *                       example: "admin@btbp.com"
 *                     phone:
 *                       type: string
 *                       nullable: true
 *                       description: Admin's phone number. May be null if not set. Pre-fill the "Phone" input field.
 *                       example: "9876543210"
 *                     avatarUrl:
 *                       type: string
 *                       nullable: true
 *                       description: URL to the admin's profile picture. May be null if not uploaded. Display as the profile avatar image.
 *                       example: null
 *                     isActive:
 *                       type: boolean
 *                       description: Whether the admin account is active. If false, the admin cannot log in.
 *                       example: true
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: When the admin account was created. Display as "Member since" on the profile page.
 *                       example: "2026-08-26T12:00:00.000Z"
 *       401:
 *         description: Not authenticated. The JWT cookie is missing, expired, or invalid. Redirect to Login.
 *       404:
 *         description: Admin not found in the database. This can happen if the admin was deleted after the JWT was issued.
 *       500:
 *         description: Internal server error while fetching the profile.
 */
router.get("/profile", authenticate, getProfile);

export default router;
