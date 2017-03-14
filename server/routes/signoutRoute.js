var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');
var util = require('../utilities.js');

router.get('/', function (req, res) {
  // remove authentication
  // req.session.destroy(function (err) {
  //   if (err) {
  //     console.log(err);
  //     throw err;
  //   }
  // });
  res.cookie('signedIn', false);
  res.clearCookie('username');
  // send user back to the login page
  res.redirect('/signin');

});

module.exports = router;
