"use strict";

var express = require("express");

var app = express();

var routes = require("./routes/routes");

var session = require("express-session");

var flash = require("connect-flash"); // body parser


app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // view engine

app.use(express["static"]("public"));
app.set("view engine", "pug"); // Sessions

app.use(session({
  cookie: {
    maxAge: 5000
  },
  secret: "woot",
  resave: false,
  saveUninitialized: false
})); // flashes

app.use(flash());
app.use(function (req, res, next) {
  res.locals.h = "LEL";
  res.locals.flashes = req.flash();
  next();
});
console.log(app.locals); // routes

app.use("/", routes); // error middleware
// export

module.exports = app;