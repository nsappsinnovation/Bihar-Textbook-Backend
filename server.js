import express from "express";
import pinoHttp from "pino-http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { printBox, startSpinner, printSuccess, printError, printDbStatus } from "./src/utils/terminal.js";
import { getLandingPageHtml } from "./src/utils/landingPage.js";
import { connectDB } from "./src/config/db.js";
import chalk from "chalk";
import env from "./src/config/env.js";
import logger from "./src/utils/logger.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.js";

// Import Routes
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
const PORT = env.PORT;


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  }),
);
app.use(express.json());
app.use(cookieParser());


app.use(pinoHttp({ logger }));

let isDbConnected = false;


app.get("/", (req, res) => {
  const uptimeSeconds = process.uptime();
  res.send(getLandingPageHtml(uptimeSeconds, isDbConnected));
});


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use("/api/auth", authRoutes);


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
