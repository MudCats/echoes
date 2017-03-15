var express = require('express');
var router = express.Router();
var path = require('path');
var util = require('../utilities.js');
var knex = require('../../db/db.js');

// queries database and returns user's album entries
router.get('/', function (req, res) {
  // get username from the cookie
  var username = req.cookies.username;
  // find all listen instances by the user
  knex.from('user')
      .join('album_impression', 'user.id', 'album_impression.user_id')
      .where('user.username', username)
      .join('album', 'album_impression.album_id', 'album.id')
      .join('artist', 'artist.id', 'album.artist_id')
      .join('listen_date', 'listen_date.album_impression_id', 'album_impression.id')
      .select('user.user',
              'listen_date.date',
              'album.title', 'artist.name', 'album.genre', 'album.year',
              'album_impression.rating', 'album_impression.impression', 'album_impression_id',
              'album.art_url60', 'album.art_url100')
      .then(function (result) {
        // send the result back to the user
        console.log(result);
        res.status(200).send(result);
      })
      .catch(function (err) {
        console.log('Problem grabbing user info');
      })
});

// TODO: check frontend to make sure this is correct format!
// post new album to the database
router.post('/', function (req, res) {
  var album = req.body.results.album;
  var date = req.body.results.date;
  var username = req.cookies.username;
  // check if artist is in db
  knex.from('artist')
    .select('id')
    .where('name', album.artistName)
    .then(function(artistId) {
    // if artist exists
      if (artistId.length) {
      // check if the album is already in the database
        knex.from('album')
          .select('id')
          .where('title', album.collectionName)
          .then(function(albumId) {
            // if the album exists
            if (album_id.length) {
              // check if the user has listened to it before
              knex('album_impression').select('id')
                .where('album_id', albumId)
                .then(function(impressId) {
                  // if user has listened to album
                  if (impressId.length) {
                    // Add a new listen date
                    knex('listen_date').insert({
                      date: date,
                      album_impression_id: impressId
                    }).then(function() {
                      res.status(201).send('Successful Post!');
                    });
                  //if user has not listened to album
                  } else {
                    //add an album_impression for the user
                    knex('album_impression').returning('id')
                        .insert({
                          user_id: username,
                          album_id: albumId
                        }).then(function(impressId) {
                          var impressId = impressId[0];
                          // add new listen date for album
                          knex('listen_date').insert({'date': date,
                            'album_impression_id': impressId}).then(function() {
                              res.status(201).send('Successful Post!');
                            });
                        });
                  }
                });
            // if album does not exist
            } else {
              // insert album
              knex('album').returning('id')
                .insert({
                  title: album.collectionName,
                  artist_id: artistId,
                  genre: album.primaryGenreName,
                  year: album.releaseDate,
                  art_url60: album.artworkUrl60,
                  art_url100: album.artworkUrl100
                 }).then(function(albumId) {
                  var albumId = albumId[0];
                  // find user's id
                  knex.from('user')
                    .select('id')
                    .where('username', username)
                    .then(function(userId) {
                      var userId = userId[0];
                      // add album impression from user
                      knex('album_impression').returning('id')
                        .insert({
                          user_id: userId,
                          album_id: albumId
                        }).then(function(impressId) {
                          var impressId = impressId[0];
                          // add new listen date for album
                          knex('listen_date').insert({'date': date,
                            'album_impression_id': impressId}).then(function() {
                              res.status(201).send('Successful Post!');
                            });
                        });

                    });
                });
            }
          });
      } else {
      // add artist to db
      knex('artist').returning('id')
        .insert({name: album.artistName})
        .then(function(artistId) {
          var artistId = artistId[0];
          // add album to db
          knex('album').returning('id')
          .insert({
            title: album.collectionName,
            artist_id: artistId,
            genre: album.primaryGenreName,
            year: album.releaseDate,
            art_url60: album.artworkUrl60,
            art_url100: album.artworkUrl100
           }).then(function(albumId) {
            var albumId = albumId[0];
            // find user's id
            knex.from('user')
              .select('id')
              .where('username', username)
              .then(function(userId) {
                var userId = userId[0];
                // add album impression from user
                knex('album_impression').returning('id')
                  .insert({
                    user_id: userId,
                    album_id: albumId
                  }).then(function(impressId) {
                    var impressId = impressId[0];
                    // add new listen date for album
                    knex('listen_date').insert({'date': date,
                      'album_impression_id': impressId}).then(function() {
                        res.status(201).send('Successful Post!');
                      });
                  });

              });
          });
        });
      }
    });
});

// add/update impression
router.post('/update', function (req, res) {
  var impress = req.body.results;
  // find the corresponding album_impression
  knex('album_impression')
    .where('id', impress.id)
    //update impression and rating w/ req.body
    .update({
      impression:impress.impression,
      rating: impress.rating
    }).then(function () {
      res.status(201).send('Updated current album');
    })
});

// remove listen_date
router.post('/remove', function (req, res) {
  var listenEntry = req.body.results
  //find the listen_date Entry
  knex('listen_date')
    // check if there is more than 1 date for that impression_id
    .where('album_impression_id', listenEntry.impressionId)
    .then(function (dates) {
        // delete listen_date entry
        knex('listen_date').where('album_impression_id', listenEntry.impressionId)
          .where('date', listenEntry.date)
          .del();
      // if album_impress_id = 1
      if (dates.length === 1) {
        // delete album_impression
          knex('album_impression')
            .where('id', listenEntry.impressionId)
            .del();
      }
    })
    .then(function () {
      res.status(201).send('Successfully removed album');
    });
});

module.exports = router;
