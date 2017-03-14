var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('knex');


// get requests served static signup file
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signup.html'));
});

// post requests add user to the database and begin session
router.post('/', function (req, res) {
  // get username and password from request body
  var name = req.body.name;
  var username = req.body.username;
  var password = req.body.password;
  // knex query to search database for user
  var query = knex('user').where('username', username);
  // if the query returns a user
  if (query) {
    // respond with status
    res.status(401).send('This username has already been taken.');
  } else {
    // Hash password with bcrypt before executing the insert statement


    // log them in

  }
});

module.exports = router;
