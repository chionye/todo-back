require("dotenv").config();

module.exports = {
  host: "dpg-ch0gg133cv2c5b4ght00-a",
  user: "todo_production",
  pass: "2n7AuojQtqNVwjmiE530wSxslWqIC0jo",
  db: "todo_icw4"
  dialect: "postgres",
  secret: "appAcademy",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
