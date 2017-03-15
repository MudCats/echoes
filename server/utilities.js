var bcrypt = require('bcrypt');
var saltRounds = 10;

// AUTHENTICATION

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
