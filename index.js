const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ info: "Node.js, express, and Postgres API" });
});

app.listen(port, () => console.log(`App running on port ${port}`));
