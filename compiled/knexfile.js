'use strict';

// Update with your config settings.
var env = require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'echoes'
    },
    debug: true
<<<<<<< HEAD
  },

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
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

=======
  }
};

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

>>>>>>> eaaa83cea770bf33423ca0f7046d02accc21f4d1
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2tuZXhmaWxlLmpzIl0sIm5hbWVzIjpbImVudiIsInJlcXVpcmUiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJjbGllbnQiLCJjb25uZWN0aW9uIiwiZGF0YWJhc2UiLCJkZWJ1ZyIsInByb2R1Y3Rpb24iLCJwcm9jZXNzIiwiREFUQUJBU0VfVVJMIiwibWlncmF0aW9ucyIsInRhYmxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLE1BQU1DLFFBQVEsUUFBUixFQUFrQkMsTUFBbEIsRUFBVjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjs7QUFFZkMsZUFBYTtBQUNYQyxZQUFRLElBREc7QUFFWEMsZ0JBQVk7QUFDVkMsZ0JBQVU7QUFEQSxLQUZEO0FBS1hDLFdBQU87QUFMSSxHQUZFOztBQVVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQVk7QUFDVkosWUFBUSxJQURFO0FBRVZDLGdCQUFZSSxRQUFRWCxHQUFSLENBQVlZLFlBRmQ7QUFHVkMsZ0JBQVk7QUFDVkMsaUJBQVc7QUFERDtBQUhGO0FBMUJHLENBQWpCOztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImtuZXhmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVXBkYXRlIHdpdGggeW91ciBjb25maWcgc2V0dGluZ3MuXG52YXIgZW52ID0gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGRldmVsb3BtZW50OiB7XG4gICAgY2xpZW50OiAncGcnLFxuICAgIGNvbm5lY3Rpb246IHtcbiAgICAgIGRhdGFiYXNlOiAnZWNob2VzJ1xuICAgIH0sXG4gICAgZGVidWc6IHRydWVcbiAgfSxcblxuICAvLyBzdGFnaW5nOiB7XG4gIC8vICAgY2xpZW50OiAncGcnLFxuICAvLyAgIGNvbm5lY3Rpb246IHtcbiAgLy8gICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAvLyAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gIC8vICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1xuICAvLyAgIH0sXG4gIC8vICAgcG9vbDoge1xuICAvLyAgICAgbWluOiAyLFxuICAvLyAgICAgbWF4OiAxMFxuICAvLyAgIH0sXG4gIC8vICAgbWlncmF0aW9uczoge1xuICAvLyAgICAgdGFibGVOYW1lOiAna25leF9taWdyYXRpb25zJ1xuICAvLyAgIH1cbiAgLy8gfSxcbiAgLy9cbiAgcHJvZHVjdGlvbjoge1xuICAgIGNsaWVudDogJ3BnJyxcbiAgICBjb25uZWN0aW9uOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgbWlncmF0aW9uczoge1xuICAgICAgdGFibGVOYW1lOiAna25leF9taWdyYXRpb25zJ1xuICAgIH1cbiAgfVxufTtcblxuLy8gVXBkYXRlIHdpdGggeW91ciBjb25maWcgc2V0dGluZ3MuXG4vLyB2YXIgZW52ID0gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG4vL1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG4vL1xuLy8gICBkZXZlbG9wbWVudDoge1xuLy8gICAgIGNsaWVudDogJ3BnJyxcbi8vICAgICBjb25uZWN0aW9uOiB7XG4vLyAgICAgICBob3N0OiAnMTA0LjEzMS4yMy4xNDEnLFxuLy8gICAgICAgdXNlcjogJ2VjaG9lcycsXG4vLyAgICAgICBwYXNzd29yZDogJzY2Nm11ZGNhdCcsXG4vLyAgICAgICBkYXRhYmFzZTogJ2VjaG9lcydcbi8vICAgICB9LFxuLy8gICAgIGRlYnVnOiB0cnVlXG4vLyAgIH0sXG4vL1xuLy8gICBzdGFnaW5nOiB7XG4vLyAgICAgY2xpZW50OiAncGcnLFxuLy8gICAgIGNvbm5lY3Rpb246IHtcbi8vICAgICAgIGhvc3Q6ICcxMDQuMTMxLjIzLjE0MScsXG4vLyAgICAgICB1c2VyOiAnZWNob2VzJyxcbi8vICAgICAgIHBhc3N3b3JkOiAnNjY2bXVkY2F0Jyxcbi8vICAgICAgIGRhdGFiYXNlOiAnZWNob2VzJ1xuLy8gICAgIH0sXG4vLyAgICAgcG9vbDoge1xuLy8gICAgICAgbWluOiAyLFxuLy8gICAgICAgbWF4OiAxMFxuLy8gICAgIH0sXG4vLyAgICAgbWlncmF0aW9uczoge1xuLy8gICAgICAgdGFibGVOYW1lOiAna25leF9taWdyYXRpb25zJ1xuLy8gICAgIH1cbi8vICAgfSxcbi8vXG4vLyAgIHByb2R1Y3Rpb246IHtcbi8vICAgICBjbGllbnQ6ICdwZycsXG4vLyAgICAgY29ubmVjdGlvbjoge1xuLy8gICAgICAgaG9zdDogJzEwNC4xMzEuMjMuMTQxJyxcbi8vICAgICAgIHVzZXI6ICdlY2hvZXMnLFxuLy8gICAgICAgcGFzc3dvcmQ6ICc2NjZtdWRjYXQnLFxuLy8gICAgICAgZGF0YWJhc2U6ICdlY2hvZXMnXG4vLyAgICAgfSxcbi8vICAgICBwb29sOiB7XG4vLyAgICAgICBtaW46IDIsXG4vLyAgICAgICBtYXg6IDEwXG4vLyAgICAgfSxcbi8vICAgICBtaWdyYXRpb25zOiB7XG4vLyAgICAgICB0YWJsZU5hbWU6ICdrbmV4X21pZ3JhdGlvbnMnXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuIl19
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2tuZXhmaWxlLmpzIl0sIm5hbWVzIjpbImVudiIsInJlcXVpcmUiLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJjbGllbnQiLCJjb25uZWN0aW9uIiwiZGF0YWJhc2UiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLE1BQU1DLFFBQVEsUUFBUixFQUFrQkMsTUFBbEIsRUFBVjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjs7QUFFZkMsZUFBYTtBQUNYQyxZQUFRLElBREc7QUFFWEMsZ0JBQVk7QUFDVkMsZ0JBQVU7QUFEQSxLQUZEO0FBS1hDLFdBQU87QUFMSTtBQUZFLENBQWpCOztBQVdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJrbmV4ZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVwZGF0ZSB3aXRoIHlvdXIgY29uZmlnIHNldHRpbmdzLlxudmFyIGVudiA9IHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBkZXZlbG9wbWVudDoge1xuICAgIGNsaWVudDogJ3BnJyxcbiAgICBjb25uZWN0aW9uOiB7XG4gICAgICBkYXRhYmFzZTogJ2VjaG9lcydcbiAgICB9LFxuICAgIGRlYnVnOiB0cnVlXG4gIH1cbn1cblxuICAvLyBzdGFnaW5nOiB7XG4gIC8vICAgY2xpZW50OiAncGcnLFxuICAvLyAgIGNvbm5lY3Rpb246IHtcbiAgLy8gICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAvLyAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gIC8vICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1xuICAvLyAgIH0sXG4gIC8vICAgcG9vbDoge1xuICAvLyAgICAgbWluOiAyLFxuICAvLyAgICAgbWF4OiAxMFxuICAvLyAgIH0sXG4gIC8vICAgbWlncmF0aW9uczoge1xuICAvLyAgICAgdGFibGVOYW1lOiAna25leF9taWdyYXRpb25zJ1xuICAvLyAgIH1cbiAgLy8gfSxcbiAgLy9cbiAgLy8gcHJvZHVjdGlvbjoge1xuICAvLyAgIGNsaWVudDogJ3BnJyxcbiAgLy8gICBjb25uZWN0aW9uOiB7XG4gIC8vICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgLy8gICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAvLyAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NcbiAgLy8gICB9LFxuICAvLyAgIHBvb2w6IHtcbiAgLy8gICAgIG1pbjogMixcbiAgLy8gICAgIG1heDogMTBcbiAgLy8gICB9LFxuICAvLyAgIG1pZ3JhdGlvbnM6IHtcbiAgLy8gICAgIHRhYmxlTmFtZTogJ2tuZXhfbWlncmF0aW9ucydcbiAgLy8gICB9XG4gIC8vIH1cbi8vfTtcblxuLy8gVXBkYXRlIHdpdGggeW91ciBjb25maWcgc2V0dGluZ3MuXG4vLyB2YXIgZW52ID0gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG4vL1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG4vL1xuLy8gICBkZXZlbG9wbWVudDoge1xuLy8gICAgIGNsaWVudDogJ3BnJyxcbi8vICAgICBjb25uZWN0aW9uOiB7XG4vLyAgICAgICBob3N0OiAnMTA0LjEzMS4yMy4xNDEnLFxuLy8gICAgICAgdXNlcjogJ2VjaG9lcycsXG4vLyAgICAgICBwYXNzd29yZDogJzY2Nm11ZGNhdCcsXG4vLyAgICAgICBkYXRhYmFzZTogJ2VjaG9lcydcbi8vICAgICB9LFxuLy8gICAgIGRlYnVnOiB0cnVlXG4vLyAgIH0sXG4vL1xuLy8gICBzdGFnaW5nOiB7XG4vLyAgICAgY2xpZW50OiAncGcnLFxuLy8gICAgIGNvbm5lY3Rpb246IHtcbi8vICAgICAgIGhvc3Q6ICcxMDQuMTMxLjIzLjE0MScsXG4vLyAgICAgICB1c2VyOiAnZWNob2VzJyxcbi8vICAgICAgIHBhc3N3b3JkOiAnNjY2bXVkY2F0Jyxcbi8vICAgICAgIGRhdGFiYXNlOiAnZWNob2VzJ1xuLy8gICAgIH0sXG4vLyAgICAgcG9vbDoge1xuLy8gICAgICAgbWluOiAyLFxuLy8gICAgICAgbWF4OiAxMFxuLy8gICAgIH0sXG4vLyAgICAgbWlncmF0aW9uczoge1xuLy8gICAgICAgdGFibGVOYW1lOiAna25leF9taWdyYXRpb25zJ1xuLy8gICAgIH1cbi8vICAgfSxcbi8vXG4vLyAgIHByb2R1Y3Rpb246IHtcbi8vICAgICBjbGllbnQ6ICdwZycsXG4vLyAgICAgY29ubmVjdGlvbjoge1xuLy8gICAgICAgaG9zdDogJzEwNC4xMzEuMjMuMTQxJyxcbi8vICAgICAgIHVzZXI6ICdlY2hvZXMnLFxuLy8gICAgICAgcGFzc3dvcmQ6ICc2NjZtdWRjYXQnLFxuLy8gICAgICAgZGF0YWJhc2U6ICdlY2hvZXMnXG4vLyAgICAgfSxcbi8vICAgICBwb29sOiB7XG4vLyAgICAgICBtaW46IDIsXG4vLyAgICAgICBtYXg6IDEwXG4vLyAgICAgfSxcbi8vICAgICBtaWdyYXRpb25zOiB7XG4vLyAgICAgICB0YWJsZU5hbWU6ICdrbmV4X21pZ3JhdGlvbnMnXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9O1xuIl19
>>>>>>> eaaa83cea770bf33423ca0f7046d02accc21f4d1
