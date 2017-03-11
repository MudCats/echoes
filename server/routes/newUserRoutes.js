var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('knex');

// get requests served static signup file
router.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signup.html'));
});

// post requests add user to the database and begin session
router.post('/signup', function (req, res) {
  // get username and password from request body
  var username = req.body.username;
  var password = req.body.password;
  // knex query to search database for user
  var query;

  if (query) {
    res.status(401).send('This username has already been taken.');
  } else {
    // add user to the database

    // log them in

  }
});

module.exports = router;
