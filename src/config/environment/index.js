const { config } = require('dotenv');

if (process.env.NODE_ENV !== 'production') config();

module.exports = {
  PORT: process.env.PORT,
  HOST_DB: process.env.HOST_DB,
  HOST_URL: process.env.HOST_URL,
  ACCESS_API_KEY: process.env.ACCESS_API_KEY,
};
