// Update with your config settings.
var env = require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'echoes'
    },
  //   debug: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
