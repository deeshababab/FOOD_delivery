
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')


// var usersRouter = require('./routes/users');
var loginRouter = require("./routes/login-route")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT))

app.use('/api', loginRouter);

module.exports = app;
