const express = require("express");
const app = express();
const routes = require("./routes/routes");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// static files
app.use(express.static(path.join(__dirname, "public")));

// Sessions
app.use(
  session({
    cookie: { maxAge: 5000 },
    secret: "woot",
    resave: false,
    saveUninitialized: false,
  })
);
// flashes
app.use(flash());

app.use((req, res, next) => {
  res.locals.h = "LEL";
  res.locals.flashes = req.flash();
  next();
});

// routes
app.use("/", routes);
// error middleware
// export
module.exports = app;
