const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("suscribe", "root", "123456789", {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = { sequelize, DataTypes };
