const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../../db/db.js');
const util = require('../utilities.js');

module.exports = (passport) => {
  // server login page
  router.get('/signin', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/../../client/signin.html'));
  });
  // serve sign up page
  router.get('/signup', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/../../client/signup.html'));
  });
  // post requests check username and password and redirect
  router.post('/signin', passport.authenticate('signin'), (req, res, next) => {
    res.redirect('/');
  });
  // post requests add user to the database and begin session
  router.post('/signup', passport.authenticate('signup'), (req, res, next) => {
    res.redirect('/');
  });
  // logs user out
  router.post('/signout', (req, res, next) => {
    req.logout();
    res.redirect('/');
  });

  return router;
};
