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
var auth = require('./routes/authRoutes.js');
var dbServer = require('./routes/dbRoutes.js');

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/public', express.static(path.join(__dirname, '/../compiled/client')));
app.use('/node_modules', express.static(path.join(__dirname, '/../node_modules')));
app.use('/styles', express.static(path.join(__dirname, '/../client/styles')));

// ROUTERS
app.use('/', appServer);
app.use('/querydb', dbServer);
app.use('/auth', authServer);

// HANDLE 404
app.use(function (req, res, next) {
  res.status(404).send('Sorry--we can\'t find that')
});

var port = process.env.PORT || 1337;
// LISTENER
app.listen(port, function () {
  console.log('Satan is listening.')
});
