"use strict";
require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.port || 5001;
const expressHandleBars = require("express-handlebars");
const session = require('express-session');
const redisStore = require('connect-redis').default;
const {createClient} = require('redis');

const redisClient = createClient({
  url: process.env.REDIS_URL
})
const passport = require('./controllers/passport');

redisClient.connect().catch(console.error);

// const {createStarList} = require('./controllers/handlebarsHelper');
const { createPagination } = require("express-handlebars-paginate");
// cau hinh public static
app.use(express.static(__dirname + "/public"));

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
  store: new redisStore({ client: redisClient}),
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
app.use("/admin", require("./routes/adminRoute.js"));
app.use("/editor", require("./routes/editorRoute.js"));
// tao db
app.get("/createTables", (req, res) => {
  let models = require("./models");
  models.sequelize.sync().then(() => {
    res.send("table created!");
  });
});

// khoi dong web server
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
