const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../../db/db.js');
const util = require('../utilities.js');

module.exports = (passport) => {
  // STATIC ASSETS
  router.get('/signin', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/../../client/signin.html'));
  });

  router.get('/signup', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/../../client/signup.html'));
  });
  // post requests check username and password and redirect
  router.post('/signin', passport.authenticate('signin'), (req, res, next) => {
    const user = { user: req.body.user, username: req.body.username };
    res.status(201).send(user);
  });
  // post requests add user to the database and begin session
  router.post('/signup', passport.authenticate('signup'), (req, res, next) => {
    const user = { user: req.body.user, username: req.body.username };
    res.status(201).send(user);
  });

  return router;
};
