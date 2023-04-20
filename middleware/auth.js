/** @format */

const jwt = require("jsonwebtoken");
const config = require("../config/db.config.js");

const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"];
    if (!token) {
      return res
        .status(403)
        .send({ message: "Please login to access the data" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
      next();
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = verifyToken;
