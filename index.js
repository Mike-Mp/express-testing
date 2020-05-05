const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT || 3001, () =>
  console.log("App listening on port 3001")
);
