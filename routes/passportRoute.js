("use strict");

const express = require("express");
const router = express.Router();
const passport = require("passport");

const controller = require("../controllers/passportController");

// set route dang nhap bang google
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "failed" }),
  function (req, res) {
    req.session.isUser = true; // Thiết lập giá trị isUser thành true
    res.locals.isUser = req.session.isUser;
    res.render("myprofile", { isUser: req.session.isUser });
    // {name:req.user.displayName,pic:req.user.photo[0].value,email:req.user.email[0].values}
  }
);

router.use((req, res, next) => {
  if (req.session.isUser) {
    res.locals.isUser = true;
  } else {
    res.locals.isUser = false;
  }
  next();
});

module.exports = router;
