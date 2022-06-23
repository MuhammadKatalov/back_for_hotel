const { Router } = require('express');
const { rendController } = require('../controllers/rends.controller');

const router = Router();

router.post('/', rendController.postRend);
router.get('/', rendController.getAllRends);

module.exports = router;