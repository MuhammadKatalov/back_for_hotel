const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  photo: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
