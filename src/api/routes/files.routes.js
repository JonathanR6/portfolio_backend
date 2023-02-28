const { Router } = require('express');

const filesControllers = require('../controllers/files.controllers');
const tryCatch = require('../middlewares/tryCatch');

const filesRoutes = Router();

filesRoutes
  .get('/file', tryCatch(filesControllers.getFile));

module.exports = filesRoutes;
