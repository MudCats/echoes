var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
  // if the user has a session, serve the dashboard page

  // if the user does not have a session, serve the landing page
  res.sendFile(path.join(__dirname, '/../../client/landing.html'));
});

router.post('/', function (req, res) {

});

module.exports = router;
