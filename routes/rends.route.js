const { Router } = require('express');
const { rendsController } = require('../controllers/rends.controller');
const authMiddlewares = require("../middlewares/auth.middleware");

const router = Router();

router.post('/rend/:roomId', authMiddlewares, rendsController.postRend);
router.get('/', rendsController.getAllRends);
router.delete('/:rend/:userId/deleterend/:roomId', rendsController.deleteRend);
router.patch('/:rendId', rendsController.changeRend);
router.get('/:userId', rendsController.getRendsByUserId);

module.exports = router;