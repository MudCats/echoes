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
    bcrypt.hash(password, salt, callback);
  });
};

// helper to check entered plaintext password against hash in db
exports.checkPassword = function (enteredPassword, hash, callback) {
  bcrypt.compare(enteredPassword, hash, callback);
}

// DATABASE QUERIES
