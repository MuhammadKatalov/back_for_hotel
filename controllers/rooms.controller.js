const Room = require("../models/Room.model");

module.exports.roomsController = {
  getAllRooms: async (req, res) => {
    try {
      const room = await Room.find().populate("hotel category");
      res.status(200).json(room);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  getRoomById: async (req, res) => {
    try {
      const { id } = req.params;
      const room = await Room.findById(id).populate("hotel category");
      res.status(200).json(room);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  postRoom: async (req, res) => {
    try {
      const { images, price, category, hotel, roomsCounter, numberPerson } = req.body;
      const room = await Room.create({
        images,
        price,
        category,
        hotel,
        roomsCounter,
        numberPerson,
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
      const { images, price, category, rented, hotel, roomsCounter, numberPerson } = req.body;
      const room = await Room.findByIdAndUpdate(
        id,
        { images, price, category, rented, hotel, roomsCounter, numberPerson },
        { new: true }
      ).populate("hotel category");
      res.status(200).json(room);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },
  deleteRoomById: async (req, res) => {
    try {
      const { id } = req.params;
      const room = await Room.findById(id);
      if (!room) {
        return res.status(404).json({
          error: `Категория с id: ${id} не найдена`,
        });
      }
      await room.remove();
      res.status(200).json({
        status: "Категория удалена",
        id: id,
      });
    } catch (e) {
      res.status(404).json({ error: err.message });
    }
  },
};
