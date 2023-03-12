const { Router } = require('express');

const projectsControllers = require('../controllers/projects.controllers');
const tryCatch = require('../middlewares/tryCatch');

const projectsRoutes = Router();

projectsRoutes
  .get('/projects', tryCatch(projectsControllers.getAllPorjects))
  .post('/upload/project', tryCatch(projectsControllers.addProject))
  .delete('/project', tryCatch(projectsControllers.removeProject));

module.exports = projectsRoutes;
