const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const middlewares = express.Router();

middlewares
  .use(express.urlencoded({ extended: true, limit: 50 * 1024 }))
  .use(express.json({ limit: 50 * 1024 }))
  .use(cors({ origin: '*' }))
  .use(morgan('dev'))
  .use(fileUpload({ limits: { fileSize: 50 * 1024 }, abortOnLimit: true }));

module.exports = middlewares;
