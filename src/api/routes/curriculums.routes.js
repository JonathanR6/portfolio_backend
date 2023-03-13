const { Router } = require('express');

const curriculumsControllers = require('../controllers/curriculums.controllers');
const checkQueryParams = require('../middlewares/checkQueryParams');
const checkAccess = require('../middlewares/checkAccess');
const tryCatch = require('../middlewares/tryCatch');

const curriculumsRoutes = Router();

curriculumsRoutes
  .get('/storage/file/curriculum', checkQueryParams, tryCatch(curriculumsControllers.getCurriculums))
  .post('/upload/curriculum', checkAccess, tryCatch(curriculumsControllers.addCurriculum))
  .delete('/storage/curriculum', checkAccess, tryCatch(curriculumsControllers.removeCurriculum));

module.exports = curriculumsRoutes;
