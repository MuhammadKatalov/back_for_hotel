const Conversation = require('../models/Conversation.model');

module.exports.conversationsController = {
  postConversation: async (req, res) => {
    try {
      const { senderId, receiverId } = req.body;

      const conversation = await Conversation.create({
        members: [senderId, receiverId]
      });

      res.status(200).json(conversation);

    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
  },
  getConversationByUserId: async (req, res) => {
    try {
      const { userId } = req.params;

      const conversation = await Conversation.find({
        members: {
          $in: [userId]
        }
      });

      res.status(200).json(conversation);

    } catch (e) {
      res.status(500).json({
        error: e.message
      })
    }
  }
}