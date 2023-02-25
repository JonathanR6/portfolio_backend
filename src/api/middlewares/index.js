const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const middlewares = express.Router();

middlewares
  .use(cors({ origin: '*' }))
  .use(morgan('dev'))
  .use(express.json());

module.exports = middlewares;
