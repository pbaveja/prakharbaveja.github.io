var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

require('dotenv').config()

var indexRouter = require('./routes/index');
var spotifyRouter = require('./routes/spotify');

var app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Server react build statically
app.use(express.static(path.join(__dirname, '../app/build')));


app.use('/api', indexRouter);
app.use('/api/spotify/', spotifyRouter);

app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/service-worker.js', (req, res) => res.status(204));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.status(500).json({
        message: err.message,
        error: err
    });
});

module.exports = app;
