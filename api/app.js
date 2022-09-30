

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//Settings
app.set('port', process.env.PORT || 3000)  //Si hay un puerto que lo use y sino el 3000

//Middlewares
app.use(express.json()); //si recibimos un json el modulo express lo entenderá y lo hará accesible a nuestras rutas


//Routes
app.use(require('./routes/employees'));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'))
});

module.exports = app;