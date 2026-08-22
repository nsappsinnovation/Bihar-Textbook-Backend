import express from "express";
import pinoHttp from "pino-http";
import { printBox, startSpinner, printSuccess, printError, printDbStatus } from "./src/utils/terminal.js";
import { getLandingPageHtml } from "./src/utils/landingPage.js";
import { connectDB } from "./src/config/db.js";
import chalk from "chalk";
import env from "./src/config/env.js";

const app = express();
const PORT = env.PORT;

// Middleware
app.use(express.json());

// Set up pino-http logger
app.use(
  pinoHttp({
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        ignore: "pid,hostname",
        translateTime: "SYS:standard",
      },
    },
  }),
);

let isDbConnected = false;

// Routes
app.get("/", (req, res) => {
  const uptimeSeconds = process.uptime();
  res.send(getLandingPageHtml(uptimeSeconds, isDbConnected));
});

// Start a spinner while the server is initializing
const spinner = startSpinner("Initializing system components...");

const startServer = async () => {
  // 1. Connect to Database
  spinner.text = chalk.gray("Connecting to MySQL Database...");
  isDbConnected = await connectDB();
  
  spinner.stop();
  printDbStatus(isDbConnected);

  // 2. Abort if Database fails
  if (!isDbConnected) {
    printError("Server startup aborted due to database connection failure.");
    process.exit(1);
  }

  // 3. Start Express Server
  app.listen(PORT, () => {
    printSuccess("System initialization complete");

    // Draw the stylized box with server info
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
