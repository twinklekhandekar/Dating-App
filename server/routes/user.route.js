const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  getMe,
  updateProfile,
  discoverUsers
} = require("../controllers/user.controller");

router.get("/me", auth, getMe);
router.put("/profile", auth, updateProfile);
router.get("/discover", auth, discoverUsers);

module.exports = router;
