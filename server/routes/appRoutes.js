var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');
var util = require('../utilities.js');
var knex = require('../../db/db.js');

router.get('/', function (req, res) {
  // if the user has a session
  console.log('req.session', req.session);
  if (req.session) {
    // serve the dashboard
    res.sendFile(path.join(__dirname, '/../../client/dashboard.html'));
    // if the user doesn't have a session
  } else {
    // serve the landing page
    res.sendFile(path.join(__dirname, '/../../client/landing.html'));
  }
});

module.exports = router;
