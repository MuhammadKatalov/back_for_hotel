const { messagesController } = require("../controllers/messages.controller");
const router = require("express").Router();

router.post('/', messagesController.postMessage);
router.get('/:conversationId', messagesController.getMessagesByConversationId);

module.exports = router;