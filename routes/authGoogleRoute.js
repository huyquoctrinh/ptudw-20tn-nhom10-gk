("use strict");

const express = require("express");
const router = express.Router();
const passport = require("passport");
require("../controllers/passportController");

// set route dang nhap bang google
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "failed" }),
  function (req, res) {
    const profile = req.user;
    let userData = {
      email: profile.email,
      name: profile.displayName,
      role: null,
      dob: null,
      avatar: profile.picture,
    };
    const User = require("../models").User;
    console.log("in user profile 11111111111111111111111 ");

    User.findOrCreate({
      where: { email: userData.email },
      defaults: userData,
    })
      .then(([user, created]) => {
        if (created) {
          console.log("in user profile 22222222222222222222221 ");

          // Người dùng đã tồn tại, sử dụng giá trị id hiện có
          console.log("User created:", user.id);
          if (userData.role == null) {
            res.render("chooseRoleDob");
            // Người dùng chưa tồn tại, tạo người dùng mới
            userData.role = req.body.role;
            userData = req.body.dob;
          }
        } else {
          console.log("hello chưa tạo -134i326423684eew32333333 ");

          res.render("chooseRoleDob");
          console.log("in user profile 233333333333333333333333333321 ");

          // Người dùng chưa tồn tại, tạo người dùng mới
          userData.role = req.body.role;
          userData.dob = req.body.dob;
        }
        if (user.role === "admin") {
          req.session.isUser = 0;
        } else if (user.role === "reader") {
          req.session.isUser = 1;
        } else if (user.role === "editor") {
          req.session.isUser = 2;
        } else if (user.role === "reporter") {
          req.session.isUser = 3;
        } else {
          //guest
          req.session.isUser = 4;
        }
        console.log("in user profile 44444444444444444 ");

        // console.log("user data: ", userData);
        // , { isUser: req.session.isUser }
        req.session.user = userData;
        res.redirect("/users/myprofile");
        // res.render("myprofile");
      })
      .catch((err) => {
        console.error("Error saving user:", err);
        res.render("/404");
      });
  }
);

module.exports = router;
