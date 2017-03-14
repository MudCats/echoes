// Update with your config settings.
var env = require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'echoes'
    },
    debug: true
    }
  }

  // staging: {
  //   client: 'pg',
  //   connection: {
  //     database: process.env.DB_HOST,
  //     username: process.env.DB_USER,
  //     password: process.env.DB_PASS
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  //
  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: process.env.DB_HOST,
  //     username: process.env.DB_USER,
  //     password: process.env.DB_PASS
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
//};

// Update with your config settings.
// var env = require('dotenv').config();
//
// module.exports = {
//
//   development: {
//     client: 'pg',
//     connection: {
//       host: '104.131.23.141',
//       user: 'echoes',
//       password: '666mudcat',
//       database: 'echoes'
//     },
//     debug: true
//   },
//
//   staging: {
//     client: 'pg',
//     connection: {
//       host: '104.131.23.141',
//       user: 'echoes',
//       password: '666mudcat',
//       database: 'echoes'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//
//   production: {
//     client: 'pg',
//     connection: {
//       host: '104.131.23.141',
//       user: 'echoes',
//       password: '666mudcat',
//       database: 'echoes'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
// };
