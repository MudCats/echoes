var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');
var util = require('../utilities.js');

router.get('/', function (req, res) {
  //clear cookies
  res.cookie('signedIn', false);
  res.clearCookie('username');
  // send user back to the login page
  res.redirect('/signin');

});

module.exports = router;
