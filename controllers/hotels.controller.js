const Hotel = require("../models/Hotel.model");

module.exports.hotelsController = {
  getAllHotels: async (req, res) => {
    try {
      const hotel = await Hotel.find();
      res.status(200).json(hotel);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  getHotelById: async (req, res) => {
    try {
      const { id } = req.params;
      const hotel = await Hotel.findById(id);
      res.status(200).json(hotel);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  postHotel: async (req, res) => {
    try {
      const { name, rating, image } = req.body;
      const hotel = await Hotel.create({ name, rating, image });
      res.status(200).json(hotel);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  deleteHotel: async (req, res) => {
    try {
      const { id } = req.params;
      const hotel = await Hotel.findByIdAndRemove(id);
      res.status(200).json({
        id: hotel._id,
        status: "Удалено",
      });
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  patchHotel: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, rating, image } = req.body;
      const hotel = await Hotel.findByIdAndUpdate(
        id,
        { name, rating, image },
        { new: true }
      );
      res.status(200).json(hotel);
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  },

  getHotelByRating: async (req, res) => {
    try {
      const { rating } = req.body;

      const hotel = await Hotel.find({ rating });

      res.status(200).json(hotel);
    } catch (e) {
      res.status(404).json({
        error: e.message,
      });
    }
  },
};
