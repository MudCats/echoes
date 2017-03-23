var express = require('express');
var router = express.Router();
var path = require('path');
var util = require('../utilities.js');
var knex = require('../../db/db.js');
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var spotify = require('../credentials/spotify-credentials.js');


//var state = generateRandomString(16);
//res.cookie(stateKey, state);

// your application requests authorization


router.get('/', function (req, res) {

/* code to get refresh token (shouldn't need to be used again, but hey, who knows)
res.redirect('https://accounts.spotify.com/authorize?' +
  querystring.stringify({
    response_type: 'code',
    client_id: spotify.client_id,
    scope: spotify.scope,
    redirect_uri: spotify.redirect_uri
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
      redirect_uri: spotify.redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(spotify.client_id + ':' + spotify.client_secret).toString('base64'))
    },
    json: true
  };

   request.post(authOptions, function(error, response, body) {
    console.log('The second part of the request');
    //console.log('response:', response);
    if (!error && response.statusCode === 200) {

      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      spotify.access_token = access_token;
      spotify.refresh_token = refresh_token;
      console.log('This is the access_token:', access_token);
      console.log('This is the access_token:', refresh_token);
      console.log('Access token was saved in-----', spotify.access_token);
      res.sendFile(path.join(__dirname, '/../../client/signin.html'));

*/

var albumTitle = req.url;

 var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(spotify.client_id + ':' + spotify.client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: spotify.refresh_token
    },
    json: true
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      spotify.access_token = body.access_token;
      // use the access token to access the Spotify Web API
      //options to access Spotify album api and retrieve the id
        var albumOptions = {
          url: 'https://api.spotify.com/v1/search' + req.url + '&type=album',
          headers: { 'Authorization': 'Bearer ' + spotify.access_token },
          json: true
        };
      request.get(albumOptions, function(error, response, body) {
        
        var artistId = body.albums.items[0].artists[0].id;
        var albumId = body.albums.items[0].id;

        var reccomendationsOptions = {
          url: 'https://api.spotify.com/v1/recommendations?seed_artists=' + artistId
          +'&seed_tracks=' + artistId,
          headers: { 'Authorization': 'Bearer ' + spotify.access_token },
          json: true
        }

        request.get(reccomendationsOptions, (error, response, body) => {
          console.log(response);
          console.log(body);
          res.send(body); //sends the first album back
        });
        
  })     
    }
  });



  
 
  

    //}
  //});
});

module.exports = router;
