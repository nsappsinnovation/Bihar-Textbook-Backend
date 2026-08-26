import { cleanEnv, str, port, url } from 'envalid';
import dotenv from 'dotenv';

// Load variables from .env file into process.env
dotenv.config();

/**
 * Validate and clean environment variables.
 * If any required variable is missing or invalid, the server will crash immediately
 * with a helpful error message instead of failing silently later.
 */
const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'], default: 'development' }),
  PORT: port({ default: 3000 }),
  DATABASE_URL: url({ desc: 'MySQL connection string' }),
  JWT_SECRET: str({ desc: 'Secret key for signing JWT tokens' })
});

export default env;
