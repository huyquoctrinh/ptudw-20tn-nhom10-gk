"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
const { body, getErrorMessage } = require("../controllers/validator");
const passport = require("passport");

router.get("/login", controller.show);
router.get("/signup", controller.showSignUp);
router.post(
  "/login",
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email là bắt buộc!")
    .isEmail()
    .withMessage("Địa chỉ email không hợp lệ!"),
  body("password").trim().notEmpty().withMessage("Mật khẩu là bắt buộc!"),
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (message) {
      return res.render("login", { loginMessage: message });
    }
    next();
  },
  controller.login
);

router.get("/logout", controller.logout);

router.post(
  "/signup",
  passport.authenticate("local-register"),
  body("name").trim().notEmpty().withMessage("Tên là bắt buộc!"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email là bắt buộc!")
    .isEmail()
    .withMessage("Địa chỉ email không hợp lệ!"),
  body("password").trim().notEmpty().withMessage("Mật khẩu là bắt buộc"),
  body("cofirmPassword").custom((cofirmPassword, { req }) => {
    if (cofirmPassword != req.body.password) {
      throw new Error("Mật khẩu không đúng!");
    }
    return true;
  }),
  body("captchaVerified")
    .trim()
    .notEmpty()
    .withMessage("Vui lòng xác minh captcha"),
  (req, res, next) => {
    let message = getErrorMessage(req);
    if (!req.session.captchaVerified) {
      req.flash("registerMessage", "Vui lòng xác minh captcha!");
    }
    if (message) {
      req.flash("registerMessage", message);
      return res.redirect("/users/login");

      // return res.render("login", { registerMessage: message });
    }
    return res.redirect("/users/login");

    next();
  },
  controller.register
);

// router.get("/forgot", controller.showForgotPassword);
// router.post(
//   "/forgot",
//   body("email")
//     .trim()
//     .notEmpty()
//     .withMessage("Email là bắt buộc")
//     .isEmail()
//     .withMessage("Địa chỉ email không hợp lệ"),
//   (req, res, next) => {
//     let message = getErrorMessage(req);
//     if (message) {
//       return res.render("forgot-password", { message });
//     }
//     next(); // Thêm dòng này để gọi hàm middleware hoặc route handler tiếp theo
//   },
//   controller.forgotPassword
// );

// router.get("/reset", controller.showResetPassword);
// router.post(
//   "/reset",
//   body("email")
//     .trim()
//     .notEmpty()
//     .withMessage("Email là bắt buộc")
//     .isEmail()
//     .withMessage("Địa chỉ email không hợp lệ!"),
//   body("password").trim().notEmpty().withMessage("Mật khẩu là bắt buộc"),
//   // body("password")
//   //   .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
//   //   .withMessage(
//   //     "Password must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
//   //   ),
//   body("confirmPassword").custom((confirmPassword, { req }) => {
//     if (confirmPassword != req.body.password) {
//       throw new Error("Passwords not match!");
//     }
//     return true;
//   }),
//   (req, res, next) => {
//     let message = getErrorMessage(req);
//     if (message) {
//       return res.render("reset-password", { message });
//     }
//     next();
//   },
//   controller.resetPassword
// );

module.exports = router;
