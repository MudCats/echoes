var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('../../db/db.js');
var util = require('../utilities.js');

// STATIC ASSETS
router.get('/signin', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signin.html'));
});

router.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signup.html'));
});

// post requests check username and password and redirect
router.post('/signin', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

});

// post requests add user to the database and begin session
router.post('/signup', function (req, res) {
  // get username and password from request body
  var user = req.body.user;
  var username = req.body.username;
  var password = req.body.password;


});
module.exports = router;
