var express = require('express');
var router = express.Router();
var path = require('path');
var util = require('../utilities.js');
var knex = require('../../db/db.js');
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');


//var state = generateRandomString(16);
//res.cookie(stateKey, state);

// your application requests authorization
var client_id = 'f545518611dc4aab8a2a791f7cab37ac';
var client_secret = '27731d5a59b946c5bcf6904c718bdb13';
var redirect_uri = 'http://localhost:1337/spotify/auth';
var stateKey = 'spotify_auth_state';
var scope = 'user-read-private user-read-email';

router.get('/', function (req, res) {


res.redirect('https://accounts.spotify.com/authorize?' +
  querystring.stringify({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri
  }));

// if the user has a session
if (req.cookies.signedIn && req.cookies.username) {
  // serve the dashboard
  res.sendFile(path.join(__dirname, '/../../client/dashboard.html'));
  // if the user doesn't have a session
} else {
  // serve the landing page
  res.sendFile(path.join(__dirname, '/../../client/landing.html'));
}
});

router.get('/auth', (req, res) => {
var code = req.query.code; //SPOTIFY code to Auth token
console.log('This is the code:', code);

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    json: true
  };

   request.post(authOptions, function(error, response, body) {
    console.log('The second part of the request');
    //console.log('response:', response);
    if (!error && response.statusCode === 200) {

      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      console.log('This is the access_token:', access_token);
      
       var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

      //console.log('Access token:', access_token);
    }
  });
});

module.exports = router;
