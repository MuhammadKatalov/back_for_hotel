const { Router } = require("express");
const router = Router();

router.use('/rends', require('./rends.route'));
router.use('/users', require('./users.route'))

module.exports = router;