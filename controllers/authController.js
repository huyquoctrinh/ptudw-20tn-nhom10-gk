"use strict";

const controller = {};
const passport = require("./passportController");
const models = require("../models");
const bcrypt = require("bcrypt");
// const User = require("../models/user");

controller.showSignUp = (req, res) => {
  res.render("signup", {
    reqUrl: req.query.reqUrl,
    registerMessage: req.flash("registerMessage"),
  });
};

controller.show = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.render("login", {
    loginMessage: req.flash("loginMessage"),
    reqUrl: req.query.reqUrl,
  });
};
controller.login = (req, res, next) => {
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
          } else if (user.role === "reporter") {
            isUser = 3;
          } else {
            isUser = 4;
          }
          // Lưu thông tin user vào flash message
          req.flash("user", user);
          req.flash("isUser", isUser);

          // Redirect đến đường dẫn
          return res.redirect("/users/myprofile");
        });
      } else {
        // Mật khẩu không khớp
        req.flash("loginMessage", "Mật khẩu không khớp");
        return res.redirect("/users/login");
      }
    });
  })(req, res, next);
};

// controller.login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     let keepSignedIn = req.body.keepSignedIn;
//     let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/users/myprofile";

//     // Tìm người dùng theo email
//     // const user = await User.findOne({ email });
//     const user = await User.oneOrNone(
//       "SELECT * FROM users WHERE email = $1",
//       email
//     );
//     // Kiểm tra xem người dùng có tồn tại không
//     if (!user) {
//       // Người dùng không tồn tại
//       // Xử lý theo yêu cầu của bạn
//       return res.redirect(`${reqUrl}`);
//     }

//     // Kiểm tra khớp mật khẩu
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (isMatch) {
//       // Mật khẩu khớp, thực hiện đăng nhập thành công
//       req.logIn(user, (error) => {
//         if (error) {
//           return next(error);
//         }
//         req.session.cookie.maxAge = keepSignedIn ? 24 * 60 * 60 * 1000 : null;
//         req.session.user = user;
//         return res.redirect(reqUrl);
//       });
//     } else {
//       // Mật khẩu không khớp
//       // Xử lý theo yêu cầu của bạn
//       return res.redirect(`${reqUrl}`);
//     }
//   } catch (error) {
//     return next(error);
//   }
// };

// controller.login = (req, res, next) => {
//   let keepSignnedIn = req.body.keepSignnedIn;
//   let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/users/myprofile";
//   let user = req.session.user;
//   passport.authenticate("local-login", (error, user) => {
//     if (error) {
//       return next(error);
//     }

//     if (!user) {
//       return res.redirect(`${reqUrl}`);
//     }

//     req.logIn(user, (error) => {
//       if (error) {
//         return next(error);
//       }
//       req.session.cookie.maxAge = keepSignnedIn ? 24 * 60 * 60 * 1000 : null;
//       req.session.user = user;
//       return res.redirect(reqUrl);
//     });
//   })(req, res, next);
// };

// controller.logout = (req, res, next) => {
//   let user = req.session.user;
//   req.logout((error) => {
//     if (error) {
//       return next(error);
//     }
//     // lưu user lại để khỏi mất
//     // giữ phiên đăng nhập
//     req.session.user = user;
//     res.redirect("/users/login");
//   });
// };

// controller.logout = (req, res, next) => {
//   let user = req.session.user;
//   req.logout((error) => {
//     if (error) {
//       return next(error);
//     }
//     // lưu user lại để khỏi mất
//     // req.session.user = user;
//     req.user = null;
//     res.redirect("/users/login");
//   });
// };
// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.log("Error logging out:", err);
//     }
//     req.user = null; // Xóa thông tin người dùng
//     res.redirect("/login"); // Chuyển hướng về trang login sau khi đăng xuất
//   });
// });
controller.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(`${req.originalUrl}`);
};

// controller.register = (req, res, next) => {
//   let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/users/myprofile";
//   let user = req.session.user;
//   passport.authenticate("local-register", (error, user) => {
//     if (error) {
//       return next(error);
//     }
//     if (!user) {
//       return res.redirect(`${reqUrl}`);
//     }
//     req.logIn(user, (error) => {
//       if (error) {
//         return next(error);
//       }
//       req.session.user = user;
//       res.redirect(reqUrl);
//     });
//   })(req, res, next);
// };

controller.register = (req, res, next) => {
  let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/users/myprofile";
  let user = req.session.user;
  passport.authenticate("local-register", (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return res.redirect(`${reqUrl}`);
    }
    req.logIn(user, (error) => {
      if (error) {
        return next(error);
      }
      req.session.user = user;
      res.redirect(reqUrl);
    });
  })(req, res, next);
};

// controller.showForgotPassword = (req, res) => {
//   res.render("forgot-password");
// };

// controller.forgotPassword = async (req, res) => {
//   let email = req.body.email;
//   let user = await models.User.findOne({ where: { email } });
//   if (user) {
//     const { sign } = require("./jwt");
//     const host = req.header("host");
//     const resetLink = `${req.protocol}://${host}/users/reset?token=${sign(
//       email
//     )}&email=${email}`;
//     const { sendForgotPasswordMail } = require("./mail");
//     sendForgotPasswordMail(user, host, resetLink)
//       .then((result) => {
//         console.log("email sent");
//         return res.render("forgot-password", { done: true });
//       })
//       .catch((error) => {
//         console.log(error.statusCode);
//         return res.render("forgot-password", {
//           message:
//             "Đã xảy ra lỗi khi gửi đến email của bạn. Vui lòng kiểm tra địa chỉ email của bạn!",
//         });
//       });
//   } else {
//     return res.render("forgot-password", { message: "Email không tồn tại!" });
//   }
// };

// controller.showResetPassword = (req, res) => {
//   let email = req.query.email;
//   let token = req.query.token;
//   let { verify } = require("./jwt");
//   if (!token || !verify(token)) {
//     return res.render("reset-password", { expired: true });
//   } else {
//     return res.render("reset-password", { email, token });
//   }
// };

// controller.resetPassword = async (req, res) => {
//   let email = req.body.email;
//   let token = req.body.token;
//   let bcrypt = require("bcrypt");
//   let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
//   console.log(req.body.password);
//   await models.User.update({ password }, { where: { email } });
//   res.render("reset-password", { done: true });
// };

module.exports = controller;
