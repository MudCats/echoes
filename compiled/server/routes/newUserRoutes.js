'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('../../db/db.js');
var util = require('../utilities.js');

// get requests served static signup file
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signup.html'));
});

// post requests add user to the database and begin session
router.post('/', function (req, res) {
  // get username and password from request body
  var user = req.body.user;
  var username = req.body.username;
  var password = req.body.password;
  // knex query to search database for user
  var query = knex('user').where('username', username);

  //query returns promise
  query.then(function (result) {
    // if the query returns a user
    if (result.length) {
      // respond with status
      res.status(401).send('This username has already been taken.');
    } else {
      // hash password with bcrypt before executing the insert statement
      util.hashPassword(password, function (err, hash) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          // store hash in password DB.
          knex('user').returning(['id', 'user', 'username']).insert({ user: user, username: username, password: hash }).then(function (result) {
            // set cookies
            res.cookie('signedIn', true);
            res.cookie('username', username);
            // redirect to dashboard
            res.status(302).redirect('/');
          }).catch(function (err) {
            throw err;
          });
        }
      });
    }
  }).catch(function (error) {
    console.log(error);
    throw error;
  });
});

module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvbmV3VXNlclJvdXRlcy5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInJvdXRlciIsIlJvdXRlciIsInBhdGgiLCJrbmV4IiwidXRpbCIsImdldCIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwiam9pbiIsIl9fZGlybmFtZSIsInBvc3QiLCJ1c2VyIiwiYm9keSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJxdWVyeSIsIndoZXJlIiwidGhlbiIsInJlc3VsdCIsImxlbmd0aCIsInN0YXR1cyIsInNlbmQiLCJoYXNoUGFzc3dvcmQiLCJlcnIiLCJoYXNoIiwiY29uc29sZSIsImxvZyIsInJldHVybmluZyIsImluc2VydCIsImNvb2tpZSIsInJlZGlyZWN0IiwiY2F0Y2giLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJQyxTQUFTRixRQUFRRyxNQUFSLEVBQWI7QUFDQSxJQUFJQyxPQUFPSCxRQUFRLE1BQVIsQ0FBWDtBQUNBLElBQUlJLE9BQU9KLFFBQVEsZ0JBQVIsQ0FBWDtBQUNBLElBQUlLLE9BQU9MLFFBQVEsaUJBQVIsQ0FBWDs7QUFFQTtBQUNBQyxPQUFPSyxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDbENBLE1BQUlDLFFBQUosQ0FBYU4sS0FBS08sSUFBTCxDQUFVQyxTQUFWLEVBQXFCLDJCQUFyQixDQUFiO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBVixPQUFPVyxJQUFQLENBQVksR0FBWixFQUFpQixVQUFVTCxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDbkM7QUFDQSxNQUFJSyxPQUFPTixJQUFJTyxJQUFKLENBQVNELElBQXBCO0FBQ0EsTUFBSUUsV0FBV1IsSUFBSU8sSUFBSixDQUFTQyxRQUF4QjtBQUNBLE1BQUlDLFdBQVdULElBQUlPLElBQUosQ0FBU0UsUUFBeEI7QUFDQTtBQUNBLE1BQUlDLFFBQVFiLEtBQUssTUFBTCxFQUFhYyxLQUFiLENBQW1CLFVBQW5CLEVBQStCSCxRQUEvQixDQUFaOztBQUVBO0FBQ0FFLFFBQU1FLElBQU4sQ0FBVyxVQUFVQyxNQUFWLEVBQWtCO0FBQzNCO0FBQ0EsUUFBSUEsT0FBT0MsTUFBWCxFQUFtQjtBQUNqQjtBQUNBYixVQUFJYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsdUNBQXJCO0FBQ0QsS0FIRCxNQUdPO0FBQ0w7QUFDQWxCLFdBQUttQixZQUFMLENBQWtCUixRQUFsQixFQUE0QixVQUFTUyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDOUMsWUFBSUQsR0FBSixFQUFTO0FBQ1BFLGtCQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDQSxnQkFBTUEsR0FBTjtBQUNELFNBSEQsTUFHTztBQUNMO0FBQ0FyQixlQUFLLE1BQUwsRUFBYXlCLFNBQWIsQ0FBdUIsQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLFVBQWYsQ0FBdkIsRUFDYUMsTUFEYixDQUNvQixFQUFDakIsTUFBTUEsSUFBUCxFQUFhRSxVQUFVQSxRQUF2QixFQUFpQ0MsVUFBVVUsSUFBM0MsRUFEcEIsRUFFYVAsSUFGYixDQUVrQixVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCO0FBQ0FaLGdCQUFJdUIsTUFBSixDQUFXLFVBQVgsRUFBdUIsSUFBdkI7QUFDQXZCLGdCQUFJdUIsTUFBSixDQUFXLFVBQVgsRUFBdUJoQixRQUF2QjtBQUNBO0FBQ0FQLGdCQUFJYyxNQUFKLENBQVcsR0FBWCxFQUFnQlUsUUFBaEIsQ0FBeUIsR0FBekI7QUFDRCxXQVJiLEVBU2FDLEtBVGIsQ0FTbUIsVUFBVVIsR0FBVixFQUFlO0FBQ3BCLGtCQUFNQSxHQUFOO0FBQ0QsV0FYYjtBQVlEO0FBQ0YsT0FuQkQ7QUFvQkQ7QUFDRixHQTVCRCxFQTRCR1EsS0E1QkgsQ0E0QlMsVUFBVUMsS0FBVixFQUFpQjtBQUN4QlAsWUFBUUMsR0FBUixDQUFZTSxLQUFaO0FBQ0EsVUFBTUEsS0FBTjtBQUNELEdBL0JEO0FBZ0NELENBekNEOztBQTJDQUMsT0FBT0MsT0FBUCxHQUFpQm5DLE1BQWpCIiwiZmlsZSI6Im5ld1VzZXJSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIga25leCA9IHJlcXVpcmUoJy4uLy4uL2RiL2RiLmpzJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy5qcycpO1xuXG4vLyBnZXQgcmVxdWVzdHMgc2VydmVkIHN0YXRpYyBzaWdudXAgZmlsZVxucm91dGVyLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy8uLi8uLi9jbGllbnQvc2lnbnVwLmh0bWwnKSk7XG59KTtcblxuLy8gcG9zdCByZXF1ZXN0cyBhZGQgdXNlciB0byB0aGUgZGF0YWJhc2UgYW5kIGJlZ2luIHNlc3Npb25cbnJvdXRlci5wb3N0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIC8vIGdldCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgZnJvbSByZXF1ZXN0IGJvZHlcbiAgdmFyIHVzZXIgPSByZXEuYm9keS51c2VyO1xuICB2YXIgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcbiAgdmFyIHBhc3N3b3JkID0gcmVxLmJvZHkucGFzc3dvcmQ7XG4gIC8vIGtuZXggcXVlcnkgdG8gc2VhcmNoIGRhdGFiYXNlIGZvciB1c2VyXG4gIHZhciBxdWVyeSA9IGtuZXgoJ3VzZXInKS53aGVyZSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG5cbiAgLy9xdWVyeSByZXR1cm5zIHByb21pc2VcbiAgcXVlcnkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgLy8gaWYgdGhlIHF1ZXJ5IHJldHVybnMgYSB1c2VyXG4gICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgIC8vIHJlc3BvbmQgd2l0aCBzdGF0dXNcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdUaGlzIHVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdGFrZW4uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhc2ggcGFzc3dvcmQgd2l0aCBiY3J5cHQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgaW5zZXJ0IHN0YXRlbWVudFxuICAgICAgdXRpbC5oYXNoUGFzc3dvcmQocGFzc3dvcmQsIGZ1bmN0aW9uKGVyciwgaGFzaCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3RvcmUgaGFzaCBpbiBwYXNzd29yZCBEQi5cbiAgICAgICAgICBrbmV4KCd1c2VyJykucmV0dXJuaW5nKFsnaWQnLCAndXNlcicsICd1c2VybmFtZSddKVxuICAgICAgICAgICAgICAgICAgICAgIC5pbnNlcnQoe3VzZXI6IHVzZXIsIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IGhhc2h9KVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBjb29raWVzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuY29va2llKCdzaWduZWRJbicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmNvb2tpZSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWRpcmVjdCB0byBkYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMzAyKS5yZWRpcmVjdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0pXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=