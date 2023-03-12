const { Router } = require('express');

const skillsControllers = require('../controllers/skills.controllers');
const tryCatch = require('../middlewares/tryCatch');

const skillsRoutes = Router();

skillsRoutes
  .get('/skills', tryCatch(skillsControllers.getAllSkills))
  .post('/upload/skill', tryCatch(skillsControllers.addSkill))
  .delete('/skill', tryCatch(skillsControllers.removeSkill));

module.exports = skillsRoutes;
