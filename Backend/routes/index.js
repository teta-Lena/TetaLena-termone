const router = require('express').Router();

router.use('/doMath', require('../calc'));

module.exports = router