const { Router } = require("express");
const router = Router();

router.use('/rends', require('./rends.route'));
router.use('/rooms', require('./rooms.route'));
router.use('/users', require('./users.route'));
router.use('/reviews', require('./reviews.route'));
router.use('/services', require('./services.route'));
router.use('/conversations', require('./conversations.route'));
router.use('/messages', require('./messages.route'));

module.exports = router;