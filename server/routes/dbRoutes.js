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
      .select('listen_date.date',
              'album.title', 'artist.name', 'album.genre', 'album.year',
              'album_impression.rating', 'album_impression.impression',
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
  var username = req.body.results.username;
  // check if artist is in db
  knex.from('album')
      .select('artist_id')
      .where('artist', album.artistName)
      .then(function(result) {
      // if artist exists
        if (!result.length) {
        // check if the album is already in the database

          // if it is, check if the user has listened to it before

            // if they have, add a new listen date for the album

            // if they haven't, add an album_impression for the user

               // then add a new listen date for the album

        // if the album isn't in the db, add it to the db with album_impression

      // if artist does not exist
        } else {
        // add artist to db
        knex('artist').returning('id')
          .insert({name: album.artistName})
          .then(function(result) {
            // add album to db
            knex('album').returning('id')
            .insert({
              title: album.collectionName, 
              artist_id: result,
              genre: album.primaryGenreName,
              year: album.releaseDate,
              art_url60: album.artworkUrl60,
              art_url100: album.artworkUrl100
             }).then(function(result) {
              // find user's id
              knex.from('user')
                .select('id')
                .where('username', username)
                .then(function(username) {
                  // add album impression from user
                  knex('album_impression').returning('id')
                    .insert({
                      user_id: username,
                      album_id: result
                    }).then(function(impressId) {
                      // add new listen date for album
                      knex('listen_date').insert({'date': date, 
                        'album_impression_id': impressId}).then(function() {
                          res.status(200).send('Successful Post!');
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
  //find the listen_date Entry
    // find the corresponding album_impression
      //update impression and rating w/ req.body
});

// remove listen_date
router.post('/remove', function (req, res) {
  //find the listen_date Entry
    // check if there is more than 1 date for that impression_id
      // if listen_date w/ album_impress_id > 1
        // delete listen_date entry
      // if album_impress_id = 1
        // save album_impress_id
        // delete listen_date Entry
        // delete album_impress
});

module.exports = router;
