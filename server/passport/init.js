var signIn = require('./signin');
var signUp = require('./sugnUp');

var users = require('../../db/controllers/users.js');

module.exports = function(passport) {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    users.getUserById(id)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
  signin(passport);
  signup(passport);
};
