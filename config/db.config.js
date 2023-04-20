require("dotenv").config();

module.exports = {
  host: process.env.APP_PORT,
  user: process.env.USER,
  pass: process.env.PASS,
  db: process.env.DB,
  dialect: process.env.DIALECT,
  secret: process.env.SECRET,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};