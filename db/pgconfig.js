const { Pool } = require("pg");
const pool = new Pool({
  database: "messages"
});

module.exports = pool;
