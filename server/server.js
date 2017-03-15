//DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var pg = require('pg');
var db = require('../db/db.js');
var cookie = require('cookie-parser');
var app = express();

// ROUTE MODULES
var appServer = require('./routes/appRoutes.js');
var authServer = require('./routes/authRoutes.js');
var newUserServer = require('./routes/newUserRoutes.js');
var dbServer = require('./routes/dbRoutes.js');
var signoutServer = require('./routes/signoutRoute.js');

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));
// TODO: add cookie secret!
app.use(cookie());
app.use('/public', express.static(path.join(__dirname, '/../compiled/client')));
app.use('/node_modules', express.static(path.join(__dirname, '/../node_modules')));

// ROUTERS
app.use('/', appServer);
app.use('/querydb', dbServer);
app.use('/signin', authServer);
app.use('/signup', newUserServer);
app.use('/signout', signoutServer);
app.use(function (req, res, next) {
  res.status(404).send('Sorry--we can\'t find that')
});

// LISTENER
app.listen(1337, function () {
  console.log('Satan is listening on port 1337.')
});
