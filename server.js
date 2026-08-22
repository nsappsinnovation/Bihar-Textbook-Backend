import express from "express";
import pinoHttp from "pino-http";
import { printBox, startSpinner, printSuccess } from "./src/utils/terminal.js";
import { getLandingPageHtml } from "./src/utils/landingPage.js";
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

// Routes
app.get("/", (req, res) => {
  const uptimeSeconds = process.uptime();
  res.send(getLandingPageHtml(uptimeSeconds));
});

// Start a spinner while the server is initializing
const spinner = startSpinner("Initializing system components...");

// Simulate a slight delay to show the spinner
setTimeout(() => {
  app.listen(PORT, () => {
    // Stop the spinner and show success
    spinner.stop();
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
}, 500);
