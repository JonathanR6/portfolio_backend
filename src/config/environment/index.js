const { config } = require('dotenv');

if (process.env.NODE_ENV !== 'production') config();

module.exports = {
  PORT: process.env.PORT,
  HOST_DB: process.env.HOST_DB,
};
