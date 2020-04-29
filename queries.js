const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  port: 3001,
  database: "api",
  password: "123",
});

// put values in .env

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER by id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.row);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};
