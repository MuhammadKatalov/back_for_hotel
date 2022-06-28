const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  country: {
    type: String,
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  booked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
  roles: [
    {
      type: String,
      ref: "Role",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
