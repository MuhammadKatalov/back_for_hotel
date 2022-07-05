const Message = require('../models/Message.model');

module.exports.messagesController = {
  postMessage: async (req, res) => {
    try {
      const { sender, conversationId, text } = req.body;

      const message = await Message.create({
        sender,
        conversationId,
        text
      });

      res.status(200).json(message);

    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
  },
  getMessagesByConversationId: async (req, res) => {
    try {
      const { conversationId } = req.params;

      const messages = await Message.find({conversationId});

      res.status(200).json(messages);

    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
  }
}