const express = require("express");
const pool = require("./db/pgconfig");
const bp = require("body-parser");
// const cors = require("cors");

const app = express();
app.use(bp.json());
// app.use(cors());

// app.use((req, res, next) => {
//   res.status(404).send("That route does not exist");
// });

app.get("/api/messages", (req, res) => {
  pool.getAllMessages().then(results => res.send(results));
});

// app.post("/api/messages", (res, req) => {
//   pool.sendMessage().then(result => res.send(results))
// })

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});

module.exports = app;
