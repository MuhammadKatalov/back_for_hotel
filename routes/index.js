const { Router } = require("express");
const router = Router();

router.use('/rends', require('./rends.route'));

module.exports = router;