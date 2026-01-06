const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  likeUser,
  getMatches
} = require("../controllers/match.controller");

router.post("/like", auth, likeUser);
router.get("/", auth, getMatches);

module.exports = router;
