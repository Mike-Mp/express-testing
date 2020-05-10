"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// postcss.config.js
var purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./views/**/*.pug", "./views/*.pug" // etc.
  ],
  // This is the function used to extract class names from your templates
  defaultExtractor: function defaultExtractor(content) {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    var broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []; // Capture classes within other delimiters like .block(class="w-1/2") in Pug

    var innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
    return broadMatches.concat(innerMatches);
  }
});

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")].concat(_toConsumableArray(process.env.NODE_ENV === "production" ? [purgecss] : []))
};