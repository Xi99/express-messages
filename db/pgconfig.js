const { Pool } = require("pg");
const pool = new Pool({
  database: "messages"
});

const sendMessage = message => {
  const values = [message.message_name, message.message_text];

  return pool
    .query(
      "INSERT INTO messages (message_name, message_text) VALUES ($1, $2)",
      values
    )
    .then(() => true);
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
