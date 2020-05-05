"use strict";

var app = require("./app");

require("dotenv").config();

app.listen(process.env.PORT || 3001, function () {
  return console.log("App listening on port 3001");
});