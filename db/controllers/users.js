const util = require('../../server/utilities.js');
const knex = require('../db.js');

exports.findUser = (username) => {
  return knex('users').where('username', username)
    .then(result => {
      return result[0];
    });
};

exports.insertUser = (user, username, password) => {
  return util.hashPassword(password)
    .then(hash => {
      return knex('users')
        .returning(['id', 'user', 'username'])
        .insert({ user: user, username: username, password: hash })
        .then(result => {
          return result[0];
        });
    });
};
