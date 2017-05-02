var LocalStrategy = require('passport-local');
var users = require('../../db/controllers/users.js');

module.exports = function(passport) {

  passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    process.nextTick(function() {

      users.findUser(req.body.username)
        .then(user => {
          if (user) {
            return done(null, false);
          }
          return users.insertUser(req.body.user, req.body.username, req.body.password)
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
