const { Router } = require('express');

const router = Router();

router.use('/upload', require('./skills.routes'));

module.exports = router;
