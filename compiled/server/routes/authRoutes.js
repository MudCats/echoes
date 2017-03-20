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
  var query = knex('users').where('username', username);
  query.then(function (result) {
    //if user does not exist
    if (!result.length) {
      // respond with status
      res.status(401).redirect('/signin');
      // if user exists
    } else {
      // find their hashed password in the db
      var hash = knex('users').where('username', username).select('password');
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
              res.status(401).redirect('/signin');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvYXV0aFJvdXRlcy5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInJvdXRlciIsIlJvdXRlciIsInBhdGgiLCJrbmV4IiwidXRpbCIsImdldCIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwiam9pbiIsIl9fZGlybmFtZSIsInBvc3QiLCJ1c2VybmFtZSIsImJvZHkiLCJwYXNzd29yZCIsInF1ZXJ5Iiwid2hlcmUiLCJ0aGVuIiwicmVzdWx0IiwibGVuZ3RoIiwic3RhdHVzIiwicmVkaXJlY3QiLCJoYXNoIiwic2VsZWN0IiwiY2hlY2tQYXNzd29yZCIsImVyciIsImNvb2tpZSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJQyxTQUFTRixRQUFRRyxNQUFSLEVBQWI7QUFDQSxJQUFJQyxPQUFPSCxRQUFRLE1BQVIsQ0FBWDtBQUNBLElBQUlJLE9BQU9KLFFBQVEsZ0JBQVIsQ0FBWDtBQUNBLElBQUlLLE9BQU9MLFFBQVEsaUJBQVIsQ0FBWDs7QUFFQTtBQUNBQyxPQUFPSyxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDbENBLE1BQUlDLFFBQUosQ0FBYU4sS0FBS08sSUFBTCxDQUFVQyxTQUFWLEVBQXFCLDJCQUFyQixDQUFiO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBVixPQUFPVyxJQUFQLENBQVksR0FBWixFQUFpQixVQUFVTCxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDbkM7QUFDQSxNQUFJSyxXQUFXTixJQUFJTyxJQUFKLENBQVNELFFBQXhCO0FBQ0EsTUFBSUUsV0FBV1IsSUFBSU8sSUFBSixDQUFTQyxRQUF4QjtBQUNBO0FBQ0EsTUFBSUMsUUFBUVosS0FBSyxPQUFMLEVBQWNhLEtBQWQsQ0FBb0IsVUFBcEIsRUFBZ0NKLFFBQWhDLENBQVo7QUFDQUcsUUFBTUUsSUFBTixDQUFXLFVBQVNDLE1BQVQsRUFBaUI7QUFDMUI7QUFDQSxRQUFJLENBQUNBLE9BQU9DLE1BQVosRUFBb0I7QUFDbEI7QUFDQVosVUFBSWEsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLFFBQWhCLENBQXlCLFNBQXpCO0FBQ0E7QUFDRCxLQUpELE1BSU87QUFDTDtBQUNBLFVBQUlDLE9BQU9uQixLQUFLLE9BQUwsRUFBY2EsS0FBZCxDQUFvQixVQUFwQixFQUFnQ0osUUFBaEMsRUFBMENXLE1BQTFDLENBQWlELFVBQWpELENBQVg7QUFDQUQsV0FBS0wsSUFBTCxDQUFVLFVBQVVLLElBQVYsRUFBZ0I7QUFDeEI7QUFDQUEsZUFBT0EsS0FBSyxDQUFMLEVBQVFSLFFBQWY7QUFDQ1YsYUFBS29CLGFBQUwsQ0FBbUJWLFFBQW5CLEVBQTZCUSxJQUE3QixFQUFtQyxVQUFVRyxHQUFWLEVBQWVQLE1BQWYsRUFBdUI7QUFDeEQsY0FBSU8sR0FBSixFQUFTO0FBQ1Asa0JBQU1BLEdBQU47QUFDRCxXQUZELE1BRU87QUFDTDtBQUNBLGdCQUFJUCxNQUFKLEVBQVk7QUFDVjtBQUNBWCxrQkFBSW1CLE1BQUosQ0FBVyxVQUFYLEVBQXVCLElBQXZCO0FBQ0FuQixrQkFBSW1CLE1BQUosQ0FBVyxVQUFYLEVBQXVCZCxRQUF2QjtBQUNBO0FBQ0FMLGtCQUFJYyxRQUFKLENBQWEsR0FBYjtBQUNBO0FBQ0QsYUFQRCxNQU9PO0FBQ0w7QUFDQWQsa0JBQUlhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxRQUFoQixDQUF5QixTQUF6QjtBQUNEO0FBQ0Y7QUFDRixTQWpCRDtBQWtCRixPQXJCRCxFQXNCQ00sS0F0QkQsQ0FzQk8sVUFBVUYsR0FBVixFQUFlO0FBQ3BCRyxnQkFBUUMsR0FBUixDQUFZLDJDQUFaO0FBQ0EsY0FBTUosR0FBTjtBQUNELE9BekJEO0FBMEJEO0FBQ0YsR0FwQ0Q7QUFxQ0QsQ0EzQ0Q7QUE0Q0FLLE9BQU9DLE9BQVAsR0FBaUIvQixNQUFqQiIsImZpbGUiOiJhdXRoUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGtuZXggPSByZXF1aXJlKCcuLi8uLi9kYi9kYi5qcycpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMuanMnKTtcblxuLy8gZ2V0IHJlcXVlc3RzIGFyZSBzZXJ2ZWQgc3RhdGljIHNpZ24gaW4gcGFnZVxucm91dGVyLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy8uLi8uLi9jbGllbnQvc2lnbmluLmh0bWwnKSk7XG59KTtcblxuLy8gcG9zdCByZXF1ZXN0cyBjaGVjayB1c2VybmFtZSBhbmQgcGFzc3dvcmQgYW5kIHJlZGlyZWN0XG5yb3V0ZXIucG9zdCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAvLyBnZXQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZyb20gcmVxdWVzdCBib2R5XG4gIHZhciB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICB2YXIgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgLy8ga25leCBxdWVyeSB0byBzZWFyY2ggZGF0YWJhc2UgZm9yIHVzZXJcbiAgdmFyIHF1ZXJ5ID0ga25leCgndXNlcnMnKS53aGVyZSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gIHF1ZXJ5LnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgLy9pZiB1c2VyIGRvZXMgbm90IGV4aXN0XG4gICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAvLyByZXNwb25kIHdpdGggc3RhdHVzXG4gICAgICByZXMuc3RhdHVzKDQwMSkucmVkaXJlY3QoJy9zaWduaW4nKTtcbiAgICAgIC8vIGlmIHVzZXIgZXhpc3RzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlaXIgaGFzaGVkIHBhc3N3b3JkIGluIHRoZSBkYlxuICAgICAgdmFyIGhhc2ggPSBrbmV4KCd1c2VycycpLndoZXJlKCd1c2VybmFtZScsIHVzZXJuYW1lKS5zZWxlY3QoJ3Bhc3N3b3JkJyk7XG4gICAgICBoYXNoLnRoZW4oZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgICAgLy9rbmV4IHJldHVybnMgYW4gYXJyYXkgd2l0aCBoYXNoIG9iamVjdCBhdCBpbmRleCAwXG4gICAgICAgIGhhc2ggPSBoYXNoWzBdLnBhc3N3b3JkO1xuICAgICAgICAgdXRpbC5jaGVja1Bhc3N3b3JkKHBhc3N3b3JkLCBoYXNoLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAvLyBpZiBwYXNzd29yZCBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgLy8gc2V0IGNvb2tpZXNcbiAgICAgICAgICAgICAgIHJlcy5jb29raWUoJ3NpZ25lZEluJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICByZXMuY29va2llKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgIC8vIHJlZGlyZWN0IHRvIGRhc2hib2FyZFxuICAgICAgICAgICAgICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gICAgICAgICAgICAgICAvLyBpZiBwYXNzd29yZCBpcyBpbmNvcnJlY3RcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgLy8gc2VuZCBlcnJvclxuICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnJlZGlyZWN0KCcvc2lnbmluJyk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmcgY29tcGFyaW5nIHBhc3N3b3JkcyEnKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=