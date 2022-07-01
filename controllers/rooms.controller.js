const Room = require("../models/Room.model");

module.exports.roomsController = {
  getAllRooms: async (req, res) => {
    try {
      const room = await Room.find()
      res.status(200).json(room);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  getRoomById: async (req, res) => {
    try {
      // const { id } = req.params;
      const room = await Room.findOne()
      res.status(200).json(room);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  postRoom: async (req, res) => {
    try {
      const { images, price, inside, outside, roomsCounter, numberPerson } = req.body;
      const room = await Room.create({
        images,
        price,
        roomsCounter,
        numberPerson,
        outside,
        inside
      });
      res.status(200).json(room);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  patchRoom: async (req, res) => {
    try {
      const { id } = req.params;
      const { images, price, inside, rented, outside, roomsCounter, numberPerson } = req.body;
      const room = await Room.findByIdAndUpdate(
        id,
        { images, price, rented, inside, outside, roomsCounter, numberPerson },
        { new: true }
      )
      res.status(200).json(room);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },
};
