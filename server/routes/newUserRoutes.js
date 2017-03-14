var express = require('express');
var router = express.Router();
var path = require('path');
var knex = require('../../db/db.js');
var util = require('../utilities.js');

// get requests served static signup file
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../client/signup.html'));
});

// post requests add user to the database and begin session
router.post('/', function (req, res) {
  // get username and password from request body
  var name = req.body.name;
  var username = req.body.username;
  var password = req.body.password;
  // knex query to search database for user
  var query = knex('user').where('username', username);

  //query returns promise
  query.then(function (result) {
    // if the query returns a user
    if (result.length) {
      // respond with status
      res.status(401).send('This username has already been taken.');
    } else {
      // Hash password with bcrypt before executing the insert statement
      util.hashPassword(password, function(err, hash) {
        if (err) {
          console.log(err);
          throw err;
        } else {
          // Store hash in password DB.
          knex('user').returning(['id', 'name', 'username'])
                      .insert({name: name, username: username, password: hash})
                      .then(function (result) {
                        //start new session for new user
                        req.session.regenerate(function (err) {
                          if (err) {
                            throw err;
                          }
                          //redirect user to dashboard
                          res.status(302).redirect('/');
                        })
                      })
                      .catch(function (err) {
                        throw err;
                      });
        }
      });
      // log them in

    }

  }).catch(function (error) {
    console.log(error);
    throw error;
  })
});

module.exports = router;
