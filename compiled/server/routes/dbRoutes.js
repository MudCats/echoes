'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var session = require('express-session');
var util = require('../utilities.js');
var knex = require('../../db/db.js');

// queries database and returns user's album entries
router.get('/querydb', function (req, res) {
  var username = req.username;
  // get the user's albums
  // knex.select('album.art_url100', 'album.title', 'album.genre', 'album.year',
  //             'artist.name',
  //             'album_impression.rating', 'album_impression.id')
  //     .from('album_impression')
  //     .join('user')
  //     .where('album_impression.user', '=', 'user.id')
});

// post new album to the database
router.post('/querydb', function (req, res) {});

module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvZGJSb3V0ZXMuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJwYXRoIiwic2Vzc2lvbiIsInV0aWwiLCJrbmV4IiwiZ2V0IiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJwb3N0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlDLFNBQVNGLFFBQVFHLE1BQVIsRUFBYjtBQUNBLElBQUlDLE9BQU9ILFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSUksVUFBVUosUUFBUSxpQkFBUixDQUFkO0FBQ0EsSUFBSUssT0FBT0wsUUFBUSxpQkFBUixDQUFYO0FBQ0EsSUFBSU0sT0FBT04sUUFBUSxnQkFBUixDQUFYOztBQUVBO0FBQ0FDLE9BQU9NLEdBQVAsQ0FBVyxVQUFYLEVBQXVCLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUN6QyxNQUFJQyxXQUFXRixJQUFJRSxRQUFuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FURDs7QUFXQTtBQUNBVCxPQUFPVSxJQUFQLENBQVksVUFBWixFQUF3QixVQUFVSCxHQUFWLEVBQWVDLEdBQWYsRUFBb0IsQ0FFM0MsQ0FGRDs7QUFJQUcsT0FBT0MsT0FBUCxHQUFpQlosTUFBakIiLCJmaWxlIjoiZGJSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgc2Vzc2lvbiA9IHJlcXVpcmUoJ2V4cHJlc3Mtc2Vzc2lvbicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMuanMnKTtcbnZhciBrbmV4ID0gcmVxdWlyZSgnLi4vLi4vZGIvZGIuanMnKTtcblxuLy8gcXVlcmllcyBkYXRhYmFzZSBhbmQgcmV0dXJucyB1c2VyJ3MgYWxidW0gZW50cmllc1xucm91dGVyLmdldCgnL3F1ZXJ5ZGInLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgdmFyIHVzZXJuYW1lID0gcmVxLnVzZXJuYW1lO1xuICAvLyBnZXQgdGhlIHVzZXIncyBhbGJ1bXNcbiAgLy8ga25leC5zZWxlY3QoJ2FsYnVtLmFydF91cmwxMDAnLCAnYWxidW0udGl0bGUnLCAnYWxidW0uZ2VucmUnLCAnYWxidW0ueWVhcicsXG4gIC8vICAgICAgICAgICAgICdhcnRpc3QubmFtZScsXG4gIC8vICAgICAgICAgICAgICdhbGJ1bV9pbXByZXNzaW9uLnJhdGluZycsICdhbGJ1bV9pbXByZXNzaW9uLmlkJylcbiAgLy8gICAgIC5mcm9tKCdhbGJ1bV9pbXByZXNzaW9uJylcbiAgLy8gICAgIC5qb2luKCd1c2VyJylcbiAgLy8gICAgIC53aGVyZSgnYWxidW1faW1wcmVzc2lvbi51c2VyJywgJz0nLCAndXNlci5pZCcpXG59KTtcblxuLy8gcG9zdCBuZXcgYWxidW0gdG8gdGhlIGRhdGFiYXNlXG5yb3V0ZXIucG9zdCgnL3F1ZXJ5ZGInLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIl19