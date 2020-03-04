const express = require("express");
const pool = require("./db/pgconfig");
const bp = require("body-parser");
// const cors = require("cors");

const app = express();
app.use(bp.json());
// app.use(cors());

app.get("/api/messages", (req, res) => {
  pool.getAllMessages().then(results => res.send(results));
});

app.post("/api/messages", (req, res) => {
  pool.sendMessage(req.body).then(() => res.sendStatus(201));
});

app.put("/api/messages/:message_id", (req, res) => {
  // console.log(req.params.message_id);
  pool
    .updateMessage(req.body, req.params.message_id)
    .then(() => res.sendStatus(201));
});

app.use((req, res, next) => {
  res.status(404).send("That route does not exist");
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});

module.exports = app;
// CREATE TABLE messages (
//   message_id SERIAL,
//   message_name TEXT,
//   message_text TEXT
// );
