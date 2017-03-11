var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');
var util = require('../utilities.js');

router.get('/', function (req, res) {
  // if the user has a session
  if (req.session.user) {
    // serve the dashboard
    res.sendFile(path.join(__dirname, '/../../client/dashboard.html'));
    // if the user doesn't have a session
  } else {
    // serve the landing page
    res.sendFile(path.join(__dirname, '/../../client/landing.html'));
  }
});

router.post('/', function (req, res) {

  // handle addition of new data from user input
});

module.exports = router;
