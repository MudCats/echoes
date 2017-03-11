// Update with your config settings.
var env = require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    debug: true
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
