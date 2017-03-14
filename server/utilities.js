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
exports.hashPassword  = function (password) {
  bcrypt.genSalt(saltRounds, function(err, salt) {
       bcrypt.hash(password, salt, null, function(err, hash) {
         if (err) {
           console.log(err);
           throw err;
         } else {
           // Store hash in password DB.
           knex('user').returning(['id', 'name', 'username']).insert({name: name, username: username, password: hash});
         }
       });
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
