/** @format */

const { todo } = require("../models");

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const data = {
    uid: req.body.uid,
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
    time: req.body.time,
  };

  todo
    .create(data)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.params.id;
  const condition = id ? { uid: id } : null;

  todo
    .findAll({ where: condition, order: [["id", "DESC"]] })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  
  todo
    .findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Record not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving record",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
console.log(id, req.body)


  todo
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num[0] === 1) {
        res.send({
          message: "Update successful.",
        });
      } else {
        res.send({
          message: `Update failed, please try again later.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating record",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  todo
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Delete successful",
        });
      } else {
        res.send({
          message: `Delete failed, please try again later.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error deleting record",
      });
    });
};
