var express = require("express");
var loginController = require("../controllers/login-controller");
var router = express.Router();


//login router
router.route('/login').post(loginController.loginData)


module.exports = router;