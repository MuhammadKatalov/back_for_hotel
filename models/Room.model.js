const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  images: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
  },
  rented: {
    type: Boolean,
    default: false,
  },
  roomsCounter: {
    type: Number,
    required: true,
  },
  numberPerson: {
    type: Number,
    required: 1
  },
  inside: String,
  outSide: String
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
