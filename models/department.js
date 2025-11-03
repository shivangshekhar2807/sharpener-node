const { DataTypes } = require("sequelize");
const sequelize = require("../DBconfig/connectDB");


const department = sequelize.define("Department", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING
    }
})

module.exports = department;