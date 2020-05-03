const axios = require("axios");

exports.homePage = (req, res) => {
  res.render("index", { title: "Index" });
};

exports.getData = async (req, res) => {
  const searchTerm = req.query.searchTerm;
  let results = await axios
    .get(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=16`)
    .then((results) => results.data)
    .catch((err) => console.log(err));

  results = results.results;
  res.render("results", { results });
};
