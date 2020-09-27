import dotenv from 'dotenv';
import path from 'path';

// Node Environment
const ENV = process.env.NODE_ENV || '';
process.env.NODE_ENV = ENV.toLowerCase() || 'development';

// Get Config File
const envFileName = `.env.${process.env.NODE_ENV}`;
let config = dotenv.config({ path: path.resolve(process.cwd(), envFileName) });

if (!config) {
  throw new Error('Configurations Not Found');
}

export default {
  env: {
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
  },
  dataAPI: {
    route: config.parsed.DATA_API_ROUTE,
    version: config.parsed.DATA_API_VERSION,
    url: `${config.parsed.DATA_API_ROUTE}/${config.parsed.DATA_API_VERSION}`,
  },
};
