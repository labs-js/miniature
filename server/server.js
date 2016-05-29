var express = require('express');
var morgan = require('morgan');
var config = require('./config');
var bodyParser = require('body-parser');

var app = express();

// true for parse videos, images etc.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(morgan('dev'));

var books = require('./books')(app, express, config);
app.use('books', books);

app.listen(config.port,
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Listening port 3000');
    }
  });
