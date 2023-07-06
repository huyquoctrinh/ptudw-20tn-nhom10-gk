"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 5001;
const expressHandleBars = require("express-handlebars");
const session = require("express-session");
const hbs = expressHandleBars.create({
  helpers: {
    eq: function (a, b) {
      return a === b;
    },
  },
});
// const redisStore = require("connect-redis").default;
// const { createClient } = require("redis");
// const redisClient = createClient({
//   url: "rediss://red-cii73mmnqql0tc2e3c00:2af44FxQIBpHF1mYy44AtSxyJH03dvHx@singapore-redis.render.com:6379",
// });
// redisClient.connect().catch(console.error);
const passport = require("./controllers/passportController");
const flash = require("connect-flash");
app.use(flash());
app.use(
  session({
    secret: "your-secret-key",
    // store: new redisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //   httpOnly: true,
    //   maxAge: 20 * 60 * 1000, // 20 minutes
    // },
  })
);

// dang nhap bang google
const GoogleStrategy = require("passport-google-oauth2").Strategy;

// const {createStarList} = require('./controllers/handlebarsHelper');
const { createPagination } = require("express-handlebars-paginate");
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
      eq: function (a, b) {
        return a === b;
      },
    },
  })
);
app.set("view engine", "hbs");

// cau hinh doc du lieu post tu body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
// tao db
app.get("/createTables", (req, res) => {
  let models = require("./models");
  models.sequelize.sync().then(() => {
    res.send("table created!");
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode | 500;
  res.status(statusCode).send(err.message);
});

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
