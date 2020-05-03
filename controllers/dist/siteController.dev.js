"use strict";

var axios = require("axios");

exports.homePage = function (req, res) {
  res.render("index", {
    title: "Index"
  });
};

exports.getData = function _callee(req, res) {
  var searchTerm, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          searchTerm = req.query.searchTerm;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("https://api.jikan.moe/v3/search/anime?q=".concat(searchTerm, "&limit=16")).then(function (results) {
            return results.data;
          })["catch"](function (err) {
            return console.log(err);
          }));

        case 3:
          results = _context.sent;
          results = results.results;
          res.render("results", {
            results: results
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};