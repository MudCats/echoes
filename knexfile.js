// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'music_info'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'music_info',
      user:     'username',
      password: 'password'
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
      database: 'music_info',
      user:     'username',
      password: 'password'
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
