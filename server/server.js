//DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var app = express();

var appServer = require('./appRoutes.js');
var authServer = require('./authRoutes.js');
var newUserServer = require('./newUserRoutes.js');

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/public', express.static(path.join(__dirname, '/../client')));

// ROUTERS
app.use('/', appServer);
app.use('/signin', authServer);
app.use('/signup', newUserServer);
app.use(function (req, res, next) {
  res.status(404).send('Sorry--we can\'t find that')
}

// LISTENER
app.listen(1337, function () {
  console.log('Server is listening on port 1337.')
});
