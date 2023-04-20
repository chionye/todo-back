/** @format */

const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.pass, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

const User = require("./user")(sequelize, DataTypes);
const Todo = require("./todo")(sequelize, DataTypes);

User.hasMany(Todo, { foreignKey: "uid", sourceKey: "id" });
Todo.belongsTo(User, { foreignKey: "uid", sourceKey: "id" });

db.user = User;
db.todo = Todo;

module.exports = db;
