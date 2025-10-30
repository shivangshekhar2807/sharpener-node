
// db.js
const mysql = require("mysql2");

// create connection
const DBconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_ROOT_PASSWORD, // replace with your actual root password
  database: "Learningsql", // replace with your database name
});

module.exports = DBconnection;
