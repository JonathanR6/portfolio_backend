const { Router } = require('express');

const router = Router();

router.use(require('./skills.routes'));
router.use(require('./files.routes'));

module.exports = router;
