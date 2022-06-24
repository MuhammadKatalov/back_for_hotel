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
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  rented: {
    type: Boolean,
    default: false,
  },
  hotel: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Hotel",
  },
  roomsCounter: {
    type: Number,
    required: true,
  },
  numberPerson: {
    type: Number,
    required: 1
  }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
