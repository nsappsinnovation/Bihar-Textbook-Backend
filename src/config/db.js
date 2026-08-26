import { PrismaClient } from '../generated/prisma/index.js';
import logger from '../utils/logger.js';

// Create a single instance of PrismaClient
const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    logger.info("Database connected successfully via Prisma.");
    return true; // Successfully connected
  } catch (error) {
    logger.error({ err: error }, 'Database connection error details');
    return false; // Connection failed
  }
};

export const getDB = () => prisma;
export default prisma;
