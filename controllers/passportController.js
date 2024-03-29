"use strict";

const passport = require("passport");

const LocalStrategy = require("passport-local");

const bcrypt = require("bcrypt");

const models = require("../models");
// const jwt = require("jsonwebtoken");

// // hàm được gọi khi xác thực thành công + lưu thông tin user vào session
// passport.serializeUser
passport.serializeUser((user, done) => {
  done(null, user);
});

// passport.deserializeUser
passport.deserializeUser(async (email, done) => {
  try {
    let user = await models.User.findOne({
      attributes: ["id", "email", "name", "dob", "role", "avatar"],
      where: { email: email.email },
    });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// xác thực người dùng dựa trên email và mật khẩu.
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      // Chuyển đổi email thành chữ thường
      if (email) {
        email = email.toLowerCase();
      }
      // Kiểm tra xem người dùng đã đăng nhập hay chưa
      try {
        // Nếu chưa đăng nhập, tiếp tục xử lý đăng nhập.
        if (!req.user) {
          // user chua dang nhap
          let user = await models.User.findOne({ where: { email } });
          if (!user) {
            return done(
              null,
              false,
              req.flash("loginMessage", "Email không tồn tại!")
            );
          }
          if (!bcrypt.compareSync(password, user.password)) {
            // mk ko dung
            return done(
              null,
              false,
              req.flash("loginMessage", "Mật khẩu không hợp lệ!")
            );
          }
          // xác thực thành công và truyền thông tin người dùng.
          return done(null, user);
        }

        //bo qua dang nhap
        done(null, req.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// xác thực và tạo tài khoản mới dựa trên thông tin người dùng cung cấp.
passport.use(
  "local-register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      if (email) {
        email = email.toLowerCase();
      }

      if (req.user) {
        return done(null, req.user);
      }
      try {
        console.log("hi");
        let user = await models.User.findOne({ where: { email } });
        if (user) {
          return done(
            null,
            false,
            req.flash("registerMessage", "Email này đã được sử dụng!")
          );
        }
        // Nếu email chưa được sử dụng, tạo tài khoản mới cho người dùng
        // Lưu xuống DB, và mã hóa password
        user = await models.User.create({
          email: email,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(8)),
          name: req.body.name,
          role: req.body.role,
          avatar: "/img/avatar/avt.png",
          dob: req.body.dob,
        });
        if (req.body.role === "reader") {
          // Tạo bản ghi trong bảng reader
          await models.Reader.create({
            id: user.id,
          });
        } else if (req.body.role === "writer") {
          // Tạo bản ghi trong bảng writer
          await models.Writer.create({
            id: user.id,
            pseudonym: req.body.name,
          });
        } else if (req.body.role === "editor") {
          // Tạo bản ghi trong bảng editor
          await models.Editor.create({
            id: user.id,
          });
        }

        // const token = jwt.sign({ userId: user.id }, "your-secret-key", {
        //   expiresIn: "30d",
        // });
        // // Gửi token trong cookie về phía người dùng
        // res.cookie("token", token, { httpOnly: true, secure: true }); // Cấu hình cho cookie

        // thong bao dang ky thanh cong
        done(
          null,
          user,
          req.flash(
            "registerMessage",
            "Bạn đã đăng ký thành công! Hãy đăng nhập."
          )
        );
      } catch (error) {
        done(error);
      }
    }
  )
);

module.exports = passport;
