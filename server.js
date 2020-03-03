const express = require("express");
const app = express();
const pool = require("./db/pgconfig");

app.use((req, res, next) => {
  res.status(404).send("That route does not exist");
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});

module.exports = app;
