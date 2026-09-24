import express from "express";
import path from "node:path";
import pinoHttp from "pino-http";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";
import { printBox, startSpinner, printSuccess, printError, printDbStatus } from "./src/utils/terminal.js";
import { getLandingPageHtml } from "./src/utils/landingPage.js";
import { connectDB } from "./src/config/db.js";
import chalk from "chalk";
import env from "./src/config/env.js";
import logger from "./src/utils/logger.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.js";
import { handleUploadError, UPLOADS_DIRECTORY } from "./src/middlewares/uploads.js";

// Import Routes
import authRoutes from "./src/routes/authRoutes.js";
import bookRoutes from "./src/routes/bookRoutes.js";
import noticeRoutes from "./src/routes/noticeRoutes.js";
import sectionRoutes from "./src/routes/sectionRoutes.js";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import settingRoutes from "./src/routes/settingRoutes.js";
import directoryRoutes from "./src/routes/directoryRoutes.js";
import activityRoutes from "./src/routes/activityRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import testRoutes from "./src/routes/testRoutes.js";
// import employees from "./src/routes/employeesRoutes.js"

const app = express();
const PORT = env.PORT;


// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "http://localhost:5174",
//       "https://bihar-textbook.vercel.app",
//       "https://bihar-textbook.vercel.app/login"
      
//     ],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
//   }),
// );

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://bihar-textbook.vercel.app",
    "https://bstbpc.gov.in"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "X-Dev-Key"
  ]
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Compress all responses
app.use(compression());

app.use(morgan("dev"));

app.use(pinoHttp({ logger }));

// Serve static uploaded files with full compatibility for /uploads, /api/uploads, and singular/plural routes
app.use("/uploads", express.static(UPLOADS_DIRECTORY));
app.use("/api/uploads", express.static(UPLOADS_DIRECTORY));

app.use("/uploads/images", express.static(path.resolve(UPLOADS_DIRECTORY, "images")));
app.use("/api/uploads/images", express.static(path.resolve(UPLOADS_DIRECTORY, "images")));
app.use("/uploads/image", express.static(path.resolve(UPLOADS_DIRECTORY, "images")));
app.use("/api/uploads/image", express.static(path.resolve(UPLOADS_DIRECTORY, "images")));

app.use("/uploads/documents", express.static(path.resolve(UPLOADS_DIRECTORY, "documents")));
app.use("/api/uploads/documents", express.static(path.resolve(UPLOADS_DIRECTORY, "documents")));
app.use("/uploads/document", express.static(path.resolve(UPLOADS_DIRECTORY, "documents")));
app.use("/api/uploads/document", express.static(path.resolve(UPLOADS_DIRECTORY, "documents")));

app.use("/uploads/videos", express.static(path.resolve(UPLOADS_DIRECTORY, "videos")));
app.use("/api/uploads/videos", express.static(path.resolve(UPLOADS_DIRECTORY, "videos")));
app.use("/uploads/video", express.static(path.resolve(UPLOADS_DIRECTORY, "videos")));
app.use("/api/uploads/video", express.static(path.resolve(UPLOADS_DIRECTORY, "videos")));

let isDbConnected = false;


app.get("/", (req, res) => {
  const uptimeSeconds = process.uptime();
  res.send(getLandingPageHtml(uptimeSeconds, isDbConnected));
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use("/api/auth", authRoutes);
app.use("/api", bookRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api", sectionRoutes);
app.use("/api", uploadRoutes);
app.use("/api", settingRoutes);
app.use("/api", directoryRoutes);
app.use("/api", activityRoutes);
app.use("/api", dashboardRoutes);
app.use("/api", testRoutes);
// app.use("/api/employee", employees)


app.use(handleUploadError);
app.use(errorHandler);



const spinner = startSpinner("Initializing system components...");

const startServer = async () => {

  spinner.text = chalk.gray("Connecting to MySQL Database...");
  isDbConnected = await connectDB();
  
  spinner.stop();
  printDbStatus(isDbConnected);

  
  if (!isDbConnected) {
    printError("Server startup aborted due to database connection failure.");
    process.exit(1);
  }


  app.listen(PORT, () => {
    printSuccess("System initialization complete");


    const statusText = chalk.green("ONLINE");
    const portText = chalk.white(PORT);
    const hostText = chalk.cyan(`http://localhost:${PORT}`);

    printBox(
      `${chalk.bold("Server Status:")}   ${statusText}\n\n` +
        `${chalk.gray("Port:")}            ${portText}\n` +
        `${chalk.gray("Local Network:")}   ${hostText}`,
    );
  });
};

startServer();
