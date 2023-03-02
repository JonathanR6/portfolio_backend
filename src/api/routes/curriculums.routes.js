const { Router } = require('express');

const curriculumsControllers = require('../controllers/curriculums.controllers');
const tryCatch = require('../middlewares/tryCatch');

const curriculumsRoutes = Router();

curriculumsRoutes
  .get('/storage/file/curriculum', tryCatch(curriculumsControllers.getCurriculums))
  .post('/upload/curriculum', tryCatch(curriculumsControllers.addCurriculum));

module.exports = curriculumsRoutes;
