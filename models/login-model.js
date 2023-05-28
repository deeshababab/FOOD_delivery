var db = require("../database");
module.exports = {
    loginData: function (email,password,callback) {
    
        var sql = "SELECT * FROM `login` WHERE email =" + '"' + email + '"'+"and password="+"'"+password+"'";
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            return callback(data)
        })
    }
}