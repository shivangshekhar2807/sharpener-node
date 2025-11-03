const { DataTypes } = require("sequelize");
const sequelize = require("../DBconfig/connectDB");

const course = sequelize.define("Course", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  courseName: {
    type: DataTypes.STRING,
  },
});

module.exports = course;
