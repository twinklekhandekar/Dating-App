const Like = require("../models/Like");
const Match = require("../models/Match");

// Demo users: only demo1 and demo3 will always match
const demoUserMatches = ["demo1", "demo3"];

exports.likeUser = async (req, res) => {
  const { toUser } = req.body;

  // Handle demo users
  if (demoUserMatches.includes(toUser)) {
    // Always a match
    return res.json({ match: true });
  }

  // ----------------------------
  // Original real-user logic
  // ----------------------------
  await Like.create({
    fromUser: req.userId,
    toUser
  });

  const mutual = await Like.findOne({
    fromUser: toUser,
    toUser: req.userId
  });

  if (mutual) {
    const existingMatch = await Match.findOne({
      users: { $all: [req.userId, toUser] }
    });

    if (!existingMatch) {
      await Match.create({ users: [req.userId, toUser] });
    }

    return res.json({ match: true });
  }

  res.json({ match: false });
};

exports.getMatches = async (req, res) => {
  const matches = await Match.find({
    users: req.userId
  }).populate("users", "name photo");

  res.json(matches);
};
