const express = require("express");
const app = express();
const routes = require("./routes/routes");
const session = require("express-session");
const flash = require("connect-flash");

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.use(express.static("public"));
app.set("view engine", "pug");

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
