"use strict";

var express = require("express");

var app = express();

var routes = require("./routes/routes"); // body parser


app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // view engine

app.use(express["static"]("public"));
app.set("view engine", "pug"); // routes

app.use("/", routes); // error middleware
// export

module.exports = app;