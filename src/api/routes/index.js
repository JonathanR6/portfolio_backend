const { Router } = require('express');

const router = Router();

router.use('/upload', require('./skills.routes'));
router.use('/storage', require('./files.routes'));

module.exports = router;
