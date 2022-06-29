const { Router } = require('express');
const { rendsController } = require('../controllers/rends.controller');

const router = Router();

router.post('/rend/:id', rendsController.postRend);
router.get('/', rendsController.getAllRends);
router.delete('/:rend/:userId/deleterend/:roomId', rendsController.deleteRend);
router.patch('/:rendId', rendsController.changeRend);
router.get('/:userId', rendsController.getRendsByUserId);

module.exports = router;