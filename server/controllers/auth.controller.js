const jwt = require("jsonwebtoken");

exports.googleCallback = async (req, res) => {
  try {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.redirect(`${process.env.CLIENT_URL}/login?token=${token}`);
  } catch (err) {
    res.status(500).json({ message: "Auth failed" });
  }
};
