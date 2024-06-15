const { Pool } = require("pg");


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL "?ssmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connected to Postgress succeessfully");
});

module.exports = pool;
