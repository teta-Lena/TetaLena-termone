const router = require('express').Router();

router.post('/doMath', require('./calculator'));

module.exports = router