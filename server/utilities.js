var bcrypt = require('bcrypt');
var saltRounds = 10;

// helper for hashing password before storing in db
exports.hashPassword  = (password) => {
  return new Promise((fulfill, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        fulfill(hash);
      };
      });
    });
  });
};

// helper to check entered plaintext password against hash in db
exports.checkPassword = (enteredPassword, hash, callback) => {
  bcrypt.compare(enteredPassword, hash, callback);
};
