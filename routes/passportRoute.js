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
  // function (req, res) {
  //   req.session.isUser = true; // Thiết lập giá trị isUser thành true
  //   res.locals.isUser = req.session.isUser;
  //   res.render("myprofile", { isUser: req.session.isUser });
  //   // {name:req.user.displayName,pic:req.user.photo[0].value,email:req.user.email[0].values}

  // }
  function (req, res) {
    // Lưu thông tin người dùng xuống bảng User
    const profile = req.user;
    const userData = {
      email: profile.email,
      firstName: profile.givenName,
      lastName: profile.familyName,
      avt: profile.picture,
      role: "user",
      dob: null,
    };
    const User = require("../models").User;

    User.findOrCreate({
      where: { email: userData.email },
      defaults: userData,
    })
      .then(([user, created]) => {
        if (created) {
          console.log("User created:", user);
        } else {
          console.log("User found:", user);
        }
        req.session.isUser = true; // Gán lại giá trị true cho req.session.isUser
        // res.render("myprofile", { isUser: req.session.isUser });
        res.render("myprofile", { isUser: req.session.isUser, user: req.user });
      })
      .catch((err) => {
        console.error("Error saving user:", err);
        res.redirect("/failed");
      });
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
