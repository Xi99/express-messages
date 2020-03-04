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

const updateMessage = (message, message_id) => {
  const values = [message.message_name, message.message_text, message_id];
  return pool
    .query(
      "UPDATE messages SET message_name = $1, message_text = $2 WHERE message_id = $3",
      values
    )
    .then(() => true);
};

const deleteMessage = message_id => {
  const values = [message_id];
  return pool
    .query("DELETE FROM messages WHERE message_id = $1", values)
    .then(() => true);
};

const getOneMessage = message_id => {
  const values = [message_id];
  return pool
    .query(
      "SELECT message_name, message_text FROM messages WHERE message_id = $1",
      values
    )
    .then(res => res.rows);
};

module.exports = {
  pool,
  getAllMessages,
  sendMessage,
  updateMessage,
  deleteMessage,
  getOneMessage
};
