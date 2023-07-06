"use strict";

require("dotenv").config();
// require("./controllers/passportController.js");
const express = require("express");
const app = express();
const port = process.env.port || 5001;
const expressHandleBars = require("express-handlebars");
const session = require("express-session");

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// dang nhap bang google
const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth2").Strategy;

// const {createStarList} = require('./controllers/handlebarsHelper');
const { createPagination } = require("express-handlebars-paginate");
// cau hinh public static
app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());
app.use(passport.session());
// Serialize và deserialize người dùng
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: process.env.GOOGLE_CALLBACK_URL,
//       passReqToCallback: true,
//     },
//     function (request, accessToken, refreshToken, profile, done) {
//       console.log(profile);
//       return done(null, profile);
//     }
//   )
// );

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
    },
  })
);
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  // store: new redisStore({ client: redisClient}),
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      maxAge: 20 * 60 * 1000 // 20 mins
  }
}));


app.use(passport.initialize());
app.use(passport.session());


//middle ware
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.isAuthenticated();
  next();
})

//cau hinh route
app.use("/", require("./routes/indexRoute"));
app.use("/Categories", require("./routes/categoryRoute"));
app.use("/newsDetail", require("./routes/newsDetailRoute"));
app.use("/google", require("./routes/passportRoute"));

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

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error logging out:", err);
    }
    req.user = null; // Xóa thông tin người dùng
    res.redirect("/log-in"); // Chuyển hướng về trang chủ sau khi đăng xuất
  });
});

// khoi dong web server
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
