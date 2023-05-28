var loginModel = require("../models/login-model");
module.exports = {
    loginData: function (req, res) {
        const email=req.body.email
        const password = req.body.password;
        loginModel.loginData(email,password,function (data) {
            
            res.send({
                responseCode: 100001,
                responseMessage:"success",
                responseData:data
            })
        })
    }
}