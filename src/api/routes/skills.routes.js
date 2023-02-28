const { Router } = require('express');

const skillsControllers = require('../controllers/skills.controllers');
const tryCatch = require('../middlewares/tryCatch');

const skillsRoutes = Router();

skillsRoutes.post('/skill', tryCatch(skillsControllers.addSkill));

module.exports = skillsRoutes;
