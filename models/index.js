const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("world", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  review: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cover: {
    type: DataTypes.STRING,
  },
});

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

module.exports = { sequelize, Book };
