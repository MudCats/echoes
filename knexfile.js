// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'echoes'
      username:,
      password:
    },
    debug: true
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'echoes',
      username:,
      password:
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
      database: 'echoes',
      username:,
      password:
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
