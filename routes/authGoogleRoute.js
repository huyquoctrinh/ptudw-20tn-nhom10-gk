("use strict");

const express = require("express");
const router = express.Router();
const passport = require("passport");
let cnt = 0;
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
    // Lưu thông tin người dùng xuống bảng User
    // delete req.user.id;
    const profile = req.user;
    // console.log("in user profile: ", profile);
    const userData = {
      email: profile.email,
      name: profile.displayName,
      role: null,
      dob: null,
      avatar: profile.picture,
    };
    const User = require("../models").User;

    User.findOrCreate({
      where: { email: userData.email },
      defaults: userData,
    })
      .then(([user, created]) => {
        if (created) {
          // Người dùng đã tồn tại, sử dụng giá trị id hiện có
          console.log("User created:", user.id);
          if (userData.role == null) {
            res.render("chooseRoleDob");
            // Người dùng chưa tồn tại, tạo người dùng mới
            userData.role = req.body.role;
            userData = req.body.dob;
          }
        } else {
          res.render("chooseRoleDob");
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
        // req.session.isUser = true; // Gán lại giá trị true cho req.session.isUser
        // res.render("myprofile", { isUser: req.session.isUser });
        console.log("user data: ", userData);

        req.session.user = userData;
        res.redirect("/users/myprofile");
      })
      .catch((err) => {
        console.error("Error saving user:", err);
        res.redirect("/failed");
      });
  }
);

// router.use((req, res, next) => {
//   if (req.session.isUser) {
//     res.locals.isUser = true;
//   } else {
//     res.locals.isUser = false;
//   }
//   next();
// });

module.exports = router;
