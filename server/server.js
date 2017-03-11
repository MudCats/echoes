//DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var app = express();

var appServer = require('./appRoutes.js');
var authServer = require('./authRoutes.js');

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/public', express.static(path.join(__dirname, '/../client')));

// ROUTERS
app.use('/', authServer);
app.use('/signin', authServer);
app.use('/signup', authServer);

// LISTENER
app.listen(1337, function () {
  console.log('Server is listening on port 1337.')
});
