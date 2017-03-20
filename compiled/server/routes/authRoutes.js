'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('../../db/db.js');
var util = require('../utilities.js');

// get requests are served static sign in page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signin.html'));
});

// post requests check username and password and redirect
router.post('/', function (req, res) {
  // get username and password from request body
  var username = req.body.username;
  var password = req.body.password;
  // knex query to search database for user
  var query = knex('user').where('username', username);
  query.then(function (result) {
    //if user does not exist
    if (!result.length) {
      // respond with status
      res.status(401).send('This user does not exist!');
      // if user exists
    } else {
      // find their hashed password in the db
      var hash = knex('user').where('username', username).select('password');
      hash.then(function (hash) {
        //knex returns an array with hash object at index 0
        hash = hash[0].password;
        util.checkPassword(password, hash, function (err, result) {
          if (err) {
            throw err;
          } else {
            // if password is correct
            if (result) {
              // set cookies
              res.cookie('signedIn', true);
              res.cookie('username', username);
              // redirect to dashboard
              res.redirect('/');
              // if password is incorrect
            } else {
              // send error
              res.status(401).send('Your password is incorrect!');
            }
          }
        });
      }).catch(function (err) {
        console.log('Something went wrong comparing passwords!');
        throw err;
      });
    }
  });
});
module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvYXV0aFJvdXRlcy5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInJvdXRlciIsIlJvdXRlciIsInBhdGgiLCJrbmV4IiwidXRpbCIsImdldCIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwiam9pbiIsIl9fZGlybmFtZSIsInBvc3QiLCJ1c2VybmFtZSIsImJvZHkiLCJwYXNzd29yZCIsInF1ZXJ5Iiwid2hlcmUiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImhhc2giLCJzZWxlY3QiLCJjaGVja1Bhc3N3b3JkIiwiZXJyIiwiY29va2llIiwicmVkaXJlY3QiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsU0FBU0YsUUFBUUcsTUFBUixFQUFiO0FBQ0EsSUFBSUMsT0FBT0gsUUFBUSxNQUFSLENBQVg7QUFDQSxJQUFJSSxPQUFPSixRQUFRLGdCQUFSLENBQVg7QUFDQSxJQUFJSyxPQUFPTCxRQUFRLGlCQUFSLENBQVg7O0FBRUE7QUFDQUMsT0FBT0ssR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2xDQSxNQUFJQyxRQUFKLENBQWFOLEtBQUtPLElBQUwsQ0FBVUMsU0FBVixFQUFxQiwyQkFBckIsQ0FBYjtBQUNELENBRkQ7O0FBSUE7QUFDQVYsT0FBT1csSUFBUCxDQUFZLEdBQVosRUFBaUIsVUFBVUwsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ25DO0FBQ0EsTUFBSUssV0FBV04sSUFBSU8sSUFBSixDQUFTRCxRQUF4QjtBQUNBLE1BQUlFLFdBQVdSLElBQUlPLElBQUosQ0FBU0MsUUFBeEI7QUFDQTtBQUNBLE1BQUlDLFFBQVFaLEtBQUssTUFBTCxFQUFhYSxLQUFiLENBQW1CLFVBQW5CLEVBQStCSixRQUEvQixDQUFaO0FBQ0FHLFFBQU1FLElBQU4sQ0FBVyxVQUFTQyxNQUFULEVBQWlCO0FBQzFCO0FBQ0EsUUFBSSxDQUFDQSxPQUFPQyxNQUFaLEVBQW9CO0FBQ2xCO0FBQ0FaLFVBQUlhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQiwyQkFBckI7QUFDQTtBQUNELEtBSkQsTUFJTztBQUNMO0FBQ0EsVUFBSUMsT0FBT25CLEtBQUssTUFBTCxFQUFhYSxLQUFiLENBQW1CLFVBQW5CLEVBQStCSixRQUEvQixFQUF5Q1csTUFBekMsQ0FBZ0QsVUFBaEQsQ0FBWDtBQUNBRCxXQUFLTCxJQUFMLENBQVUsVUFBVUssSUFBVixFQUFnQjtBQUN4QjtBQUNBQSxlQUFPQSxLQUFLLENBQUwsRUFBUVIsUUFBZjtBQUNDVixhQUFLb0IsYUFBTCxDQUFtQlYsUUFBbkIsRUFBNkJRLElBQTdCLEVBQW1DLFVBQVVHLEdBQVYsRUFBZVAsTUFBZixFQUF1QjtBQUN4RCxjQUFJTyxHQUFKLEVBQVM7QUFDUCxrQkFBTUEsR0FBTjtBQUNELFdBRkQsTUFFTztBQUNMO0FBQ0EsZ0JBQUlQLE1BQUosRUFBWTtBQUNWO0FBQ0FYLGtCQUFJbUIsTUFBSixDQUFXLFVBQVgsRUFBdUIsSUFBdkI7QUFDQW5CLGtCQUFJbUIsTUFBSixDQUFXLFVBQVgsRUFBdUJkLFFBQXZCO0FBQ0E7QUFDQUwsa0JBQUlvQixRQUFKLENBQWEsR0FBYjtBQUNBO0FBQ0QsYUFQRCxNQU9PO0FBQ0w7QUFDQXBCLGtCQUFJYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsNkJBQXJCO0FBQ0Q7QUFDRjtBQUNGLFNBakJEO0FBa0JGLE9BckJELEVBc0JDTyxLQXRCRCxDQXNCTyxVQUFVSCxHQUFWLEVBQWU7QUFDcEJJLGdCQUFRQyxHQUFSLENBQVksMkNBQVo7QUFDQSxjQUFNTCxHQUFOO0FBQ0QsT0F6QkQ7QUEwQkQ7QUFDRixHQXBDRDtBQXFDRCxDQTNDRDtBQTRDQU0sT0FBT0MsT0FBUCxHQUFpQmhDLE1BQWpCIiwiZmlsZSI6ImF1dGhSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIga25leCA9IHJlcXVpcmUoJy4uLy4uL2RiL2RiLmpzJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy5qcycpO1xuXG4vLyBnZXQgcmVxdWVzdHMgYXJlIHNlcnZlZCBzdGF0aWMgc2lnbiBpbiBwYWdlXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLy4uLy4uL2NsaWVudC9zaWduaW4uaHRtbCcpKTtcbn0pO1xuXG4vLyBwb3N0IHJlcXVlc3RzIGNoZWNrIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBhbmQgcmVkaXJlY3RcbnJvdXRlci5wb3N0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIC8vIGdldCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgZnJvbSByZXF1ZXN0IGJvZHlcbiAgdmFyIHVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XG4gIHZhciBwYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xuICAvLyBrbmV4IHF1ZXJ5IHRvIHNlYXJjaCBkYXRhYmFzZSBmb3IgdXNlclxuICB2YXIgcXVlcnkgPSBrbmV4KCd1c2VyJykud2hlcmUoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICBxdWVyeS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIC8vaWYgdXNlciBkb2VzIG5vdCBleGlzdFxuICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgLy8gcmVzcG9uZCB3aXRoIHN0YXR1c1xuICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1RoaXMgdXNlciBkb2VzIG5vdCBleGlzdCEnKTtcbiAgICAgIC8vIGlmIHVzZXIgZXhpc3RzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlaXIgaGFzaGVkIHBhc3N3b3JkIGluIHRoZSBkYlxuICAgICAgdmFyIGhhc2ggPSBrbmV4KCd1c2VyJykud2hlcmUoJ3VzZXJuYW1lJywgdXNlcm5hbWUpLnNlbGVjdCgncGFzc3dvcmQnKTtcbiAgICAgIGhhc2gudGhlbihmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICAvL2tuZXggcmV0dXJucyBhbiBhcnJheSB3aXRoIGhhc2ggb2JqZWN0IGF0IGluZGV4IDBcbiAgICAgICAgaGFzaCA9IGhhc2hbMF0ucGFzc3dvcmQ7XG4gICAgICAgICB1dGlsLmNoZWNrUGFzc3dvcmQocGFzc3dvcmQsIGhhc2gsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIC8vIGlmIHBhc3N3b3JkIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAvLyBzZXQgY29va2llc1xuICAgICAgICAgICAgICAgcmVzLmNvb2tpZSgnc2lnbmVkSW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgIHJlcy5jb29raWUoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICByZXMucmVkaXJlY3QoJy8nKTtcbiAgICAgICAgICAgICAgIC8vIGlmIHBhc3N3b3JkIGlzIGluY29ycmVjdFxuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAvLyBzZW5kIGVycm9yXG4gICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgnWW91ciBwYXNzd29yZCBpcyBpbmNvcnJlY3QhJyk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmcgY29tcGFyaW5nIHBhc3N3b3JkcyEnKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=