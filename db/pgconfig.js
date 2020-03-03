const { Pool } = require("pg");
const pool = new Pool({
  database: "messages"
});

pool.getAllMessages = () => {
  database.query("SELECT * FROM messages").then(res => console.log(res));
};

module.exports = pool;

// CREATE TABLE messages (
//   message_id SERIAL,
//   message_name TEXT,
//   message_text TEXT
// );
