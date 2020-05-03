"use strict";

var axios = require("axios");

exports.homePage = function (req, res) {
  res.render("index", {
    title: "Index"
  });
};

exports.getData = function _callee(req, res) {
  var searchTerm, limit, limitString, baseUrl, typeString, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          searchTerm = "q=".concat(req.query.searchTerm);
          limit = req.query.limit || 16;
          limitString = "limit=".concat(limit);
          baseUrl = "https://api.jikan.moe/v3/search/anime?";

          if (req.query.type) {
            typeString = "type=".concat(req.query.type);
          } else {
            typeString = "";
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(axios.get("".concat(baseUrl).concat(searchTerm, "&").concat(limitString, "&").concat(typeString)).then(function (results) {
            return results.data;
          })["catch"](function (err) {
            return console.log(err);
          }));

        case 7:
          results = _context.sent;
          results = results.results;

          if (!(results.length === 0)) {
            _context.next = 12;
            break;
          }

          req.flash("error", "Please input something foundable");
          return _context.abrupt("return", res.redirect("/"));

        case 12:
          res.render("results", {
            results: results
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};