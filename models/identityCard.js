const { DataTypes } = require("sequelize");
const sequelize = require("../DBconfig/connectDB");

const identityCard = sequelize.define("IdentityCard", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cardNo: {
    type: DataTypes.INTEGER,
    unique: true,

    allowNull: false,
  },
});

module.exports = identityCard;
