const { conversationsController } = require("../controllers/conversations.controller");
const router = require("express").Router();

router.post('/', conversationsController.postConversation);
router.get('/:userId', conversationsController.getConversationByUserId);

module.exports = router;