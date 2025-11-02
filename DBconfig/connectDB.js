
// db.js
const mysql = require("mysql2");
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('Learningsql', 'root', process.env.DB_ROOT_PASSWORD, {
  host: 'localhost',
  dialect: "mysql"
});


module.exports = sequelize;


// // create connection
// const DBconnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.DB_ROOT_PASSWORD, // replace with your actual root password
//   database: "Learningsql", // replace with your database name
// });

// module.exports = DBconnection;
