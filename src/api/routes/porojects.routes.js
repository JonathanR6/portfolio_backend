const { Router } = require('express');

const projectsControllers = require('../controllers/projects.controllers');
const checkAccess = require('../middlewares/checkAccess');
const tryCatch = require('../middlewares/tryCatch');

const projectsRoutes = Router();

projectsRoutes
  .get('/projects', tryCatch(projectsControllers.getAllPorjects))
  .post('/upload/project', checkAccess, tryCatch(projectsControllers.addProject))
  .delete('/project', checkAccess, tryCatch(projectsControllers.removeProject));

module.exports = projectsRoutes;
