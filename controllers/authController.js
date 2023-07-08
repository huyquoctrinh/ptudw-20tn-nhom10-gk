"use strict";

const controller = require("../controllers/passportController");

const passport = require("./passportController");
const models = require("../models");
const bcrypt = require("bcrypt");
// const User = require("../models/user");

controller.showSignUp = (req, res) => {
  res.render("signup", {
    captcha: res.recaptcha,
    registerMessage: req.flash("registerMessage"),
  });
};

controller.show = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.render("login", {
    loginMessage: req.flash("loginMessage"),
  });
};
controller.login = (req, res, next) => {
  let keepSignnedIn = req.body.keepSignnedIn;
  passport.authenticate("local-login", (error, user, info) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      // Người dùng không tồn tại hoặc mật khẩu không khớp
      return res.redirect("/users/login");
    }

    // So sánh mật khẩu đã hash
    bcrypt.compare(req.body.password, user.password, (error, isMatch) => {
      if (error) {
        return next(error);
      }

      if (isMatch) {
        // Mật khẩu khớp, thực hiện đăng nhập thành công
        req.logIn(user, (error) => {
          if (error) {
            return next(error);
          }
          // Kiểm tra giá trị user.role và gán giá trị tương ứng cho isUser
          let isUser;
          if (user.role === "admin") {
            isUser = 0;
          } else if (user.role === "user") {
            isUser = 1;
          } else if (user.role === "editor") {
            isUser = 2;
          } else if (user.role === "writer") {
            isUser = 3;
          } else {
            isUser = 4;
          }
          req.session.cookie.maxAge = keepSignnedIn
            ? 24 * 60 * 60 * 1000
            : null;
          req.session.user = user;
          req.session.isUser = isUser;
          console.log("11111111111111111 Gia tri isUser =", isUser);
          // Render trang myprofile
          res.app.render(
            "myprofile",
            { user: user, isUser: isUser, isLoggedIn: req.isAuthenticated() },
            (err, html) => {
              if (err) {
                // Xử lý lỗi nếu cần thiết
                return next(err);
              }
              // Thay đổi đường dẫn
              return res.redirect("/users/myprofile");
            }
          );
        });
      } else {
        // Mật khẩu không khớp
        req.flash("loginMessage", "Mật khẩu không khớp");
        return res.redirect("/users/login");
      }
    });
  })(req, res, next);
};

controller.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(`${req.originalUrl}`);
};

controller.register = (req, res, next) => {
  let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/users/login";
  let user = req.session.user;

  // Khởi tạo CAPTCHA
  const recaptcha = new Recaptcha(
    CAPTCHA_APIKEY_PUBLIC,
    CAPTCHA_APIKEY_PRIVATE
  );

  // Kiểm tra CAPTCHA
  recaptcha.verify(req, (error, data) => {
    if (error) {
      return res.redirect("/404");
    }
    // Đánh dấu rằng captcha đã được hoàn thành
    req.session.captchaVerified = true;
    passport.authenticate("local-register", (error, user) => {
      if (error) {
        return next(error);
      }
      if (!user) {
        return res.redirect(`${reqUrl}`);
      }
      // Lấy token từ cookie và gửi nó kèm theo yêu cầu
      const token = req.cookies.token;
      res.json({ token });

      req.logIn(user, (error) => {
        if (error) {
          return next(error);
        }
        req.session.user = user;
        res.redirect(reqUrl);
      });
    })(req, res, next);
  });
};

controller.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error logging out:", err);
    }
    console.log(
      "User logged out heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    );
    req.user = null; // Xóa thông tin người dùng
    res.redirect("/users/login"); // Chuyển hướng về trang login sau khi đăng xuất
  });
};
module.exports = controller;
