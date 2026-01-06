require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");


require("./config/passport");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(passport.initialize());

app.use("/auth", require("./routes/auth.route"));
app.use("/user", require("./routes/user.route"));
app.use("/match", require("./routes/match.route"));

app.get("/", (_, res) => res.send("API running"));

module.exports = app;
