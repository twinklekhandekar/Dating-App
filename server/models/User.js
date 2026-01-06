const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  name: String,
  email: String,
  photo: String,
  bio: { type: String, default: "" },
  gender: String,
  interestedIn: String
});

module.exports = mongoose.model("User", userSchema);
