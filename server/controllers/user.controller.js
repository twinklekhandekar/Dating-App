const User = require("../models/User");

exports.getMe = async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.userId,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.discoverUsers = async (req, res) => {
  const users = await User.find({ _id: { $ne: req.userId } });
  res.json(users);
};
