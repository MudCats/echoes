var LocalStrategy = require('passport-local');
var users = require('../../db/controllers/users.js');

module.exports = function(passport) {

  passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {

    process.nextTick(function() {

      users.getUser(username)
        .then(user => {
          if (user.username) {
            return done(null, false);
          }
          return users.insertUser(req.user, username, password)
            .then(newUser => {
              done(null, newUser);
            });
        })
        .catch(err => {
          console.log('Signup Error: ', err);
          done(err, null);
        });
    });
  }));
};
