var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');
var util = require('../utilities.js');
var knex = require('../../db/db.js');

// queries database and returns user's album entries
router.get('/', function (req, res) {
  var username = req.cookies.username;
  knex.from('user')
      .join('album_impression', 'user.id', 'album_impression.user_id')
      .where('user.username', username)
      .join('album', 'album_impression.album_id', 'album.id')
      .join('artist', 'artist.id', 'album.artist_id')
      .join('listen_date', 'listen_date.album_impression_id', 'album_impression.id')
      .select('listen_date.date',
              'album.title', 'artist.name', 'album.genre', 'album.year',
              'album_impression.rating', 'album_impression.impression',
              'album.art_url60', 'album.art_url100')
      .then(function (result) {
        console.log(result);
      })
      .catch(function (err) {
        console.log('Problem grabbing user info');
      })
});

// post new album to the database
router.post('/querydb', function (req, res) {

});

module.exports = router;
