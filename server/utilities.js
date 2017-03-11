var session = require('express-session')

// AUTHENTICATION

// middleware for verifying session
exports.checkUser = function (req, res, next) {
  // if the user doesn't have an active session
  // TODO: make sure session can be checked based on existence of user
  if (!req.session.user) {
    // send them back to the login page
    res.redirect('/signin')
  } else {
    // otherwise, let them continue
    next();
  }
}

// DATABASE QUERIES
