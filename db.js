const Pool = require('pg').Pool;
const pool = new Pool({
  user: "chebok",
  password: "1807",
  host: "localhost",
  port: 5432,
  database: "hexlet"
});


module.exports = pool;
