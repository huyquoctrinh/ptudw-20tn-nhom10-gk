"use strict";

require("dotenv").config();
require("./controllers/passportController.js");
const express = require("express");
const app = express();
const session = require("express-session");
const port = process.env.port || 5001;
const expressHandleBars = require("express-handlebars");
const passport = require("passport");
const { createPagination } = require("express-handlebars-paginate");
const flash = require("express-flash");
const Recaptcha = require("express-recaptcha").RecaptchaV2;
const multer = require("multer");

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

// dang nhap bang google
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// cau hinh public static
app.use(express.static(__dirname + "/public"));

// cấu hình sử dụng passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
      profileFields: ["id", "displayName", "email", "birthday", "picture"],
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);

//cau hinh su dung express handle bar
app.engine(
  "hbs",
  expressHandleBars.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
    helpers: {
      createPagination,
      substring: function (value, start, end) {
        value = value.toString(); // Chuyển đổi value thành chuỗi

        return value.substring(start, end);
      },
      eq: function (a, b) {
        return a === b;
      },
    },
  })
);
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // store: new redisStore({ client: redisClient}),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 20 * 60 * 1000, // 20 mins
    },
  })
);

//middle ware
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.isAuthenticated();
  res.locals.user = req.user;
  res.locals.isUser = req.isUser;
  next();
});

// Cấu hình reCAPTCHA
const recaptcha = new Recaptcha(
  process.env.CAPTCHA_APIKEY_PUBLIC,
  process.env.CAPTCHA_APIKEY_PRIVATE
);
app.use(recaptcha.middleware.render);

//cau hinh route
app.use("/", require("./routes/indexRoute"));
app.use("/Categories", require("./routes/categoryRoute"));
app.use("/newsDetail", require("./routes/newsDetailRoute"));

app.use("/users", require("./routes/authRoute"));
app.use("/users", require("./routes/userRoute"));
app.use("/users/login/google", require("./routes/authGoogleRoute"));

app.get("/users/logout", (req, res) => {
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
});

app.use("/admin", require("./routes/adminRoute.js"));
app.use("/editor", require("./routes/editorRoute.js"));
app.use("/writer", require("./routes/writerRoute.js"));
// tao db
app.get("/createTables", (req, res) => {
  let models = require("./models");
  models.sequelize.sync().then(() => {
    res.send("table created!");
  });
});

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode | 500;
//   res.status(statusCode).send(err.message);
// });

//404 router
app.use("/404", (req, res) => {
  res.status(404).render("404", {
    layout: "layout.hbs",
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    layout: "layout.hbs",
  });
});

// khoi dong web server
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
