const { Schema, model, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
  avatar: {
    type: String,
    default: "",
  },
  name: String,
  surname: String,
  booked: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Room",
    },
  ],
  roles: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Role",
    },
  ],
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model("User", UserSchema);
