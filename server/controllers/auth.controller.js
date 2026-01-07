const jwt = require("jsonwebtoken");

exports.googleCallback = async (req, res) => {
  try {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,      
      sameSite: "none"    
    });

    res.redirect(`${process.env.CLIENT_URL}/discover`);
  } catch (err) {
    res.redirect(`${process.env.CLIENT_URL}/login?error=auth_failed`);
  }
};
