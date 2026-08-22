import mysql from 'mysql2/promise';
import env from './env.js';

let pool;

export const connectDB = async () => {
  try {
    // Aiven and other cloud providers append ?ssl-mode=REQUIRED which mysql2 doesn't parse natively.
    // We strip it and manually provide the required SSL configuration object.
    const cleanUrl = env.DATABASE_URL.replace('?ssl-mode=REQUIRED', '');
    
    pool = mysql.createPool({
      uri: cleanUrl,
      ssl: {
        rejectUnauthorized: false // Required for Aiven cloud connections without a local CA cert
      }
    });

    // Test the connection
    const connection = await pool.getConnection();
    connection.release();
    return true; // Successfully connected
  } catch (error) {
    console.error('Database connection error details:', error);
    return false; // Connection failed
  }
};

export const getDB = () => pool;
