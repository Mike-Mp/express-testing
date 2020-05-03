const axios = require("axios");

exports.homePage = (req, res) => {
  res.render("index", { title: "Index" });
};

exports.getData = async (req, res) => {
  const searchTerm = `q=${req.query.searchTerm}`;
  const limit = req.query.limit || 16;
  const limitString = `limit=${limit}`;
  const baseUrl = "https://api.jikan.moe/v3/search/anime?";
  let typeString;
  if (req.query.type) {
    typeString = `type=${req.query.type}`;
  } else {
    typeString = "";
  }
  let results = await axios
    .get(`${baseUrl}${searchTerm}&${limitString}&${typeString}`)
    .then((results) => results.data)
    .catch((err) => console.log(err));

  results = results.results;

  if (results.length === 0) {
    req.flash("error", "Please input something foundable");
    return res.redirect("/");
  }

  res.render("results", { results });
};
