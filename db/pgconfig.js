const { Pool } = require("pg");
const pool = new Pool({
  database: "messages"
});

const sendMessage = message => {
  let values = [message_name, message_text];
  return pool
    .query("INSERT INTO messages VALUES ($1, $2)", values)
    .then(res => console.log("message: ", res.rows));
};

const getAllMessages = () => {
  return pool.query("SELECT * FROM messages").then(res => res.rows);
};

module.exports = {
  pool,
  getAllMessages,
  sendMessage
};
// CREATE TABLE messages (
//   message_id SERIAL,
//   message_name TEXT,
//   message_text TEXT
// );
