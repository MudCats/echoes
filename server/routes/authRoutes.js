var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('knex');

// get requests are served static sign in page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signin.html'));
});

// post requests check username and password and redirect
router.post('/', function (req, res) {
  // get username and password from request body
  var username = req.body.username;
  var password = req.body.password;
  // knex query to search database for user
  var query;
  // if the user is not in the database
  if (!query) {
    // respond with status
    res.status(401).send('This user does not exist!');
    // if the database password and entered password don't match
  } else if (query.password !== password){
    // respond with status
    res.status(401).send('Sorry--this password is incorrect.')
  } else {
    // generate the user's session
    res.redirect('/')
  }
});
