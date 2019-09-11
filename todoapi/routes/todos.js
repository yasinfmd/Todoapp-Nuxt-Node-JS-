var express = require('express');
var router = express.Router();
const checkAuth = require("../middleware/check-auth")

const TodoController = require("../controllers/todos")

router.get('/getall/:status', checkAuth, TodoController.todo_get_all);

module.exports = router;