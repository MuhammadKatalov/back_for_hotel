const { Router } = require('express');
const { rendController } = require('../controllers/rends.controller');

const router = Router();

router.post('/rend/:roomId', rendController.postRend);
router.get('/', rendController.getAllRends);
router.delete('/:rend/deleterend/:roomId', rendController.deleteRend);
router.patch('/:rendId', rendController.changeRend);

module.exports = router;