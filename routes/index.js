const { Router } = require("express");
const router = Router();

router.use('/rends', require('./rends.route'));
router.use('/rooms', require('./rooms.route'));

module.exports = router;