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
  try {
    const demoUsers = [
      { _id: "demo1", name: "Aanya", photo: "https://i.pravatar.cc/150?img=1", bio: "Love hiking", location: "Mumbai" },
      { _id: "demo2", name: "Riya", photo: "https://i.pravatar.cc/150?img=2", bio: "Movie buff", location: "Delhi" },
      { _id: "demo3", name: "Sara", photo: "https://i.pravatar.cc/150?img=3", bio: "Coffee lover", location: "Bangalore" },
    ];

    const realUsers = await User.find({ _id: { $ne: req.userId } });

    const users = [...demoUsers, ...realUsers];

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Discover failed" });
  }
};


