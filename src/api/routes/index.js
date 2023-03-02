const { Router } = require('express');

const router = Router();

router.use(require('./skills.routes'));
router.use(require('./porojects.routes'));
router.use(require('./files.routes'));
router.use(require('./curriculums.routes'));

module.exports = router;
