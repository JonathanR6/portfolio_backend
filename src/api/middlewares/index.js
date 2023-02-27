const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const middlewares = express.Router();

middlewares
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors({ origin: '*' }))
  .use(morgan('dev'))
  .use(fileUpload());

module.exports = middlewares;
