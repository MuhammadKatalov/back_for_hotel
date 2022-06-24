const { Router } = require("express");
const router = Router();

router.use('/rends', require('./rends.route'));
<<<<<<< HEAD
router.use('/rooms', require('./rooms.route'));
=======
router.use('/users', require('./users.route'))
>>>>>>> main

module.exports = router;