var session = require('express-session')
var bcrypt = require('bcrypt');
var saltRounds = 10;

// AUTHENTICATION

// middleware for verifying session
exports.checkUser = function (req, res, next) {
  // if the user doesn't have an active session
  // TODO: IS THIS HELPER NECESSARY?
  if (!req.session.user) {
    // send them back to the login page
    res.redirect('/signin')
  } else {
    // otherwise, let them continue
    next();
  }
};

// helper for hashing password before storing in db
exports.hashPassword  = function (password, callback) {
  bcrypt.genSalt(saltRounds, function(err, salt) {
       console.log('look at dis salt', salt);
       bcrypt.hash(password, salt, callback);
   });
};

// helper to check entered plaintext password against hash in db
exports.checkPassword = function (enteredPassword) {
  // TODO: write query to get hash from users table
  var hash;
  bcrypt.compare(enteredPassword, hash, function (err, res) {
    if (err) {
      throw err;
    } else {
      // returns boolean
      return res;
    }
  })

}

// DATABASE QUERIES
