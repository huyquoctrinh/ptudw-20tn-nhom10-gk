("use strict");

const express = require("express");
const router = express.Router();
const passport = require("passport");

// const controller = require("../controllers/passportController");

// set route dang nhap bang google
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "failed" }),
  function (req, res) {
    res.redirect("/myprofile");
  }
);

module.exports = router;
