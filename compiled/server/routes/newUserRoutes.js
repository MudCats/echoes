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
  var query = knex('users').where('username', username);

  //query returns promise
  query.then(function (result) {
    // if the query returns a user
    if (result.length) {
      // respond with status
      res.status(401).redirect('/signup');
    } else {
      // hash password with bcrypt before executing the insert statement
      util.hashPassword(password, function (err, hash) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          // store hash in password DB.
          knex('users').returning(['id', 'user', 'username']).insert({ user: user, username: username, password: hash }).then(function (result) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvbmV3VXNlclJvdXRlcy5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInJvdXRlciIsIlJvdXRlciIsInBhdGgiLCJrbmV4IiwidXRpbCIsImdldCIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwiam9pbiIsIl9fZGlybmFtZSIsInBvc3QiLCJ1c2VyIiwiYm9keSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJxdWVyeSIsIndoZXJlIiwidGhlbiIsInJlc3VsdCIsImxlbmd0aCIsInN0YXR1cyIsInJlZGlyZWN0IiwiaGFzaFBhc3N3b3JkIiwiZXJyIiwiaGFzaCIsImNvbnNvbGUiLCJsb2ciLCJyZXR1cm5pbmciLCJpbnNlcnQiLCJjb29raWUiLCJjYXRjaCIsImVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlDLFNBQVNGLFFBQVFHLE1BQVIsRUFBYjtBQUNBLElBQUlDLE9BQU9ILFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSUksT0FBT0osUUFBUSxnQkFBUixDQUFYO0FBQ0EsSUFBSUssT0FBT0wsUUFBUSxpQkFBUixDQUFYOztBQUVBO0FBQ0FDLE9BQU9LLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNsQ0EsTUFBSUMsUUFBSixDQUFhTixLQUFLTyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsMkJBQXJCLENBQWI7QUFDRCxDQUZEOztBQUlBO0FBQ0FWLE9BQU9XLElBQVAsQ0FBWSxHQUFaLEVBQWlCLFVBQVVMLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUNuQztBQUNBLE1BQUlLLE9BQU9OLElBQUlPLElBQUosQ0FBU0QsSUFBcEI7QUFDQSxNQUFJRSxXQUFXUixJQUFJTyxJQUFKLENBQVNDLFFBQXhCO0FBQ0EsTUFBSUMsV0FBV1QsSUFBSU8sSUFBSixDQUFTRSxRQUF4QjtBQUNBO0FBQ0EsTUFBSUMsUUFBUWIsS0FBSyxPQUFMLEVBQWNjLEtBQWQsQ0FBb0IsVUFBcEIsRUFBZ0NILFFBQWhDLENBQVo7O0FBRUE7QUFDQUUsUUFBTUUsSUFBTixDQUFXLFVBQVVDLE1BQVYsRUFBa0I7QUFDM0I7QUFDQSxRQUFJQSxPQUFPQyxNQUFYLEVBQW1CO0FBQ2pCO0FBQ0FiLFVBQUljLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxRQUFoQixDQUF5QixTQUF6QjtBQUNELEtBSEQsTUFHTztBQUNMO0FBQ0FsQixXQUFLbUIsWUFBTCxDQUFrQlIsUUFBbEIsRUFBNEIsVUFBU1MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQzlDLFlBQUlELEdBQUosRUFBUztBQUNQRSxrQkFBUUMsR0FBUixDQUFZSCxHQUFaO0FBQ0EsZ0JBQU1BLEdBQU47QUFDRCxTQUhELE1BR087QUFDTDtBQUNBckIsZUFBSyxPQUFMLEVBQWN5QixTQUFkLENBQXdCLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxVQUFmLENBQXhCLEVBQ2FDLE1BRGIsQ0FDb0IsRUFBQ2pCLE1BQU1BLElBQVAsRUFBYUUsVUFBVUEsUUFBdkIsRUFBaUNDLFVBQVVVLElBQTNDLEVBRHBCLEVBRWFQLElBRmIsQ0FFa0IsVUFBVUMsTUFBVixFQUFrQjtBQUN0QjtBQUNBWixnQkFBSXVCLE1BQUosQ0FBVyxVQUFYLEVBQXVCLElBQXZCO0FBQ0F2QixnQkFBSXVCLE1BQUosQ0FBVyxVQUFYLEVBQXVCaEIsUUFBdkI7QUFDQTtBQUNBUCxnQkFBSWMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLFFBQWhCLENBQXlCLEdBQXpCO0FBQ0QsV0FSYixFQVNhUyxLQVRiLENBU21CLFVBQVVQLEdBQVYsRUFBZTtBQUNwQixrQkFBTUEsR0FBTjtBQUNELFdBWGI7QUFZRDtBQUNGLE9BbkJEO0FBb0JEO0FBQ0YsR0E1QkQsRUE0QkdPLEtBNUJILENBNEJTLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJOLFlBQVFDLEdBQVIsQ0FBWUssS0FBWjtBQUNBLFVBQU1BLEtBQU47QUFDRCxHQS9CRDtBQWdDRCxDQXpDRDs7QUEyQ0FDLE9BQU9DLE9BQVAsR0FBaUJsQyxNQUFqQiIsImZpbGUiOiJuZXdVc2VyUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGtuZXggPSByZXF1aXJlKCcuLi8uLi9kYi9kYi5qcycpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMuanMnKTtcblxuLy8gZ2V0IHJlcXVlc3RzIHNlcnZlZCBzdGF0aWMgc2lnbnVwIGZpbGVcbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICcvLi4vLi4vY2xpZW50L3NpZ251cC5odG1sJykpO1xufSk7XG5cbi8vIHBvc3QgcmVxdWVzdHMgYWRkIHVzZXIgdG8gdGhlIGRhdGFiYXNlIGFuZCBiZWdpbiBzZXNzaW9uXG5yb3V0ZXIucG9zdCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAvLyBnZXQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZyb20gcmVxdWVzdCBib2R5XG4gIHZhciB1c2VyID0gcmVxLmJvZHkudXNlcjtcbiAgdmFyIHVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XG4gIHZhciBwYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xuICAvLyBrbmV4IHF1ZXJ5IHRvIHNlYXJjaCBkYXRhYmFzZSBmb3IgdXNlclxuICB2YXIgcXVlcnkgPSBrbmV4KCd1c2VycycpLndoZXJlKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcblxuICAvL3F1ZXJ5IHJldHVybnMgcHJvbWlzZVxuICBxdWVyeS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAvLyBpZiB0aGUgcXVlcnkgcmV0dXJucyBhIHVzZXJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgLy8gcmVzcG9uZCB3aXRoIHN0YXR1c1xuICAgICAgcmVzLnN0YXR1cyg0MDEpLnJlZGlyZWN0KCcvc2lnbnVwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhc2ggcGFzc3dvcmQgd2l0aCBiY3J5cHQgYmVmb3JlIGV4ZWN1dGluZyB0aGUgaW5zZXJ0IHN0YXRlbWVudFxuICAgICAgdXRpbC5oYXNoUGFzc3dvcmQocGFzc3dvcmQsIGZ1bmN0aW9uKGVyciwgaGFzaCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3RvcmUgaGFzaCBpbiBwYXNzd29yZCBEQi5cbiAgICAgICAgICBrbmV4KCd1c2VycycpLnJldHVybmluZyhbJ2lkJywgJ3VzZXInLCAndXNlcm5hbWUnXSlcbiAgICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0KHt1c2VyOiB1c2VyLCB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBoYXNofSlcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgY29va2llc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmNvb2tpZSgnc2lnbmVkSW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5jb29raWUoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDMwMikucmVkaXJlY3QoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9KVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIl19