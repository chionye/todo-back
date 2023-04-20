const todo = require("../controllers/todo.js");

var router = require("express").Router();

router.get("/:id", todo.findAll);

router.post("/", todo.create);

router.put("/:id", todo.update);

router.delete("/:id", todo.delete);

module.exports = router;