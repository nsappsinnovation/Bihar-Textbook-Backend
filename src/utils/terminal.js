import chalk from 'chalk';
import boxen from 'boxen';
import ora from 'ora';

/**
 * Print a stylized, clean box to the terminal
 * @param {string} message - The message to display inside the box
 */
export const printBox = (message) => {
  console.log(boxen(message, {
    padding: { top: 1, bottom: 1, left: 4, right: 4 },
    margin: { top: 1, bottom: 1 },
    borderStyle: 'round',
    borderColor: 'gray',
    align: 'left'
  }));
};

/**
 * Start a minimal loading spinner
 * @param {string} message - The message to display with the spinner
 * @returns {ora.Ora} The spinner instance
 */
export const startSpinner = (message) => {
  const spinner = ora({
    text: chalk.gray(message),
    spinner: 'dots'
  }).start();
  return spinner;
};

/**
 * Print a professional success message
 * @param {string} message - The success message
 */
export const printSuccess = (message) => {
  console.log('\n' + chalk.bgGreen.black(' SUCCESS ') + ' ' + chalk.white(message));
};

/**
 * Print a professional error message
 * @param {string} message - The error message
 */
export const printError = (message) => {
  console.log('\n' + chalk.bgRed.black(' ERROR ') + ' ' + chalk.white(message));
};

/**
 * Print a professional info message
 * @param {string} message - The info message
 */
export const printInfo = (message) => {
  console.log('\n' + chalk.bgBlue.black(' INFO ') + ' ' + chalk.white(message));
};
