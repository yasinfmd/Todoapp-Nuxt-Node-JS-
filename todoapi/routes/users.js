var express = require('express');
var router = express.Router();
const LoginController = require("../controllers/login")
router.post('/signin', LoginController.sign_in);

module.exports = router;