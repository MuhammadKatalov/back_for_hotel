const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
