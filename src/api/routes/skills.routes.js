const { Router } = require('express');

const skillsControllers = require('../controllers/skills.controllers');
const checkAccess = require('../middlewares/checkAccess');
const tryCatch = require('../middlewares/tryCatch');

const skillsRoutes = Router();

skillsRoutes
  .get('/skills', tryCatch(skillsControllers.getAllSkills))
  .post('/upload/skill', checkAccess, tryCatch(skillsControllers.addSkill))
  .delete('/skill', checkAccess, tryCatch(skillsControllers.removeSkill));

module.exports = skillsRoutes;
