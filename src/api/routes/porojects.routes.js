const { Router } = require('express');

const projectsControllers = require('../controllers/projects.controllers');
const tryCatch = require('../middlewares/tryCatch');

const projectsRoutes = Router();

projectsRoutes
  .post('/upload/project', tryCatch(projectsControllers.addProject))
  .get('/projects', tryCatch(projectsControllers.getAllPorjects));

module.exports = projectsRoutes;
