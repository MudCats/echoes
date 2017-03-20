'use strict';

exports.up = function (knex, Promise) {
  return Promise.all([
  //users
  knex.schema.createTable('user', function (table) {
    table.increments('id').primary();
    table.string('user');
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
  }),

  //artists
  knex.schema.createTable('artist', function (table) {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
  }),

  //many albums to one artist
  knex.schema.createTable('album', function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('artist_id');
    table.string('genre').notNullable();
    table.integer('year').notNullable();
    table.string('art_url60').notNullable(); //saves album art 60px size square
    table.string('art_url100').notNullable(); //saves album art 100px size square
    table.foreign('artist_id').references('artist.id');
    table.unique(['title', 'artist_id']); //guarantees no repeated albums for an artist
  }),

  //many songs to one album
  knex.schema.createTable('song', function (table) {
    table.increments('id').primary();
    table.string('title');
    table.integer('album_id');
    table.foreign('album_id').references('album.id');
    table.unique(['title', 'album_id']);
  }),

  //many users impressions to many albums
  knex.schema.createTable('album_impression', function (table) {
    table.increments('id').primary();
    table.integer('user_id');
    table.integer('album_id');
    table.integer('rating');
    table.string('impression');
    table.foreign('user_id').references('user.id');
    table.foreign('album_id').references('album.id');
    table.unique(['user_id', 'album_id']);
  }),

  //many listening dates to one album impression
  knex.schema.createTable('listen_date', function (table) {
    table.increments('id').primary();
    table.integer('album_impression_id');
    table.date('date').notNullable();
    table.foreign('album_impression_id').references('album_impression.id');
    table.unique(['album_impression_id', 'date']);
  })]);
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable('listen_date'), knex.schema.dropTable('album_impression'), knex.schema.dropTable('song'), knex.schema.dropTable('album'), knex.schema.dropTable('artist'), knex.schema.dropTable('user')]);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21pZ3JhdGlvbnMvMjAxNzAzMTExMzAwMDhfc2NoZW1hLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJ1cCIsImtuZXgiLCJQcm9taXNlIiwiYWxsIiwic2NoZW1hIiwiY3JlYXRlVGFibGUiLCJ0YWJsZSIsImluY3JlbWVudHMiLCJwcmltYXJ5Iiwic3RyaW5nIiwidW5pcXVlIiwibm90TnVsbGFibGUiLCJpbnRlZ2VyIiwiZm9yZWlnbiIsInJlZmVyZW5jZXMiLCJkYXRlIiwiZG93biIsImRyb3BUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7QUFDQUEsUUFBUUMsRUFBUixHQUFhLFVBQVNDLElBQVQsRUFBZUMsT0FBZixFQUF3QjtBQUNuQyxTQUFPQSxRQUFRQyxHQUFSLENBQVk7QUFDakI7QUFDQUYsT0FBS0csTUFBTCxDQUFZQyxXQUFaLENBQXdCLE1BQXhCLEVBQWdDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDOUNBLFVBQU1DLFVBQU4sQ0FBaUIsSUFBakIsRUFBdUJDLE9BQXZCO0FBQ0FGLFVBQU1HLE1BQU4sQ0FBYSxNQUFiO0FBQ0FILFVBQU1HLE1BQU4sQ0FBYSxVQUFiLEVBQXlCQyxNQUF6QixHQUFrQ0MsV0FBbEM7QUFDQUwsVUFBTUcsTUFBTixDQUFhLFVBQWIsRUFBeUJFLFdBQXpCO0FBQ0QsR0FMRCxDQUZpQjs7QUFTakI7QUFDQVYsT0FBS0csTUFBTCxDQUFZQyxXQUFaLENBQXdCLFFBQXhCLEVBQWtDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDaERBLFVBQU1DLFVBQU4sQ0FBaUIsSUFBakIsRUFBdUJDLE9BQXZCO0FBQ0FGLFVBQU1HLE1BQU4sQ0FBYSxNQUFiLEVBQXFCQyxNQUFyQixHQUE4QkMsV0FBOUI7QUFDRCxHQUhELENBVmlCOztBQWVqQjtBQUNBVixPQUFLRyxNQUFMLENBQVlDLFdBQVosQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsS0FBVCxFQUFnQjtBQUMvQ0EsVUFBTUMsVUFBTixDQUFpQixJQUFqQixFQUF1QkMsT0FBdkI7QUFD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InNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0cy51cCA9IGZ1bmN0aW9uKGtuZXgsIFByb21pc2UpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAvL3VzZXJzXG4gICAga25leC5zY2hlbWEuY3JlYXRlVGFibGUoJ3VzZXInLCBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgdGFibGUuaW5jcmVtZW50cygnaWQnKS5wcmltYXJ5KCk7XG4gICAgICB0YWJsZS5zdHJpbmcoJ3VzZXInKTtcbiAgICAgIHRhYmxlLnN0cmluZygndXNlcm5hbWUnKS51bmlxdWUoKS5ub3ROdWxsYWJsZSgpO1xuICAgICAgdGFibGUuc3RyaW5nKCdwYXNzd29yZCcpLm5vdE51bGxhYmxlKCk7XG4gICAgfSksXG5cbiAgICAvL2FydGlzdHNcbiAgICBrbmV4LnNjaGVtYS5jcmVhdGVUYWJsZSgnYXJ0aXN0JywgZnVuY3Rpb24odGFibGUpIHtcbiAgICAgIHRhYmxlLmluY3JlbWVudHMoJ2lkJykucHJpbWFyeSgpO1xuICAgICAgdGFibGUuc3RyaW5nKCduYW1lJykudW5pcXVlKCkubm90TnVsbGFibGUoKTtcbiAgICB9KSxcblxuICAgIC8vbWFueSBhbGJ1bXMgdG8gb25lIGFydGlzdFxuICAgIGtuZXguc2NoZW1hLmNyZWF0ZVRhYmxlKCdhbGJ1bScsIGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICB0YWJsZS5pbmNyZW1lbnRzKCdpZCcpLnByaW1hcnkoKTtcbiAgICAgIHRhYmxlLnN0cmluZygndGl0bGUnKS5ub3ROdWxsYWJsZSgpO1xuICAgICAgdGFibGUuaW50ZWdlcignYXJ0aXN0X2lkJyk7XG4gICAgICB0YWJsZS5zdHJpbmcoJ2dlbnJlJykubm90TnVsbGFibGUoKTtcbiAgICAgIHRhYmxlLmludGVnZXIoJ3llYXInKS5ub3ROdWxsYWJsZSgpO1xuICAgICAgdGFibGUuc3RyaW5nKCdhcnRfdXJsNjAnKS5ub3ROdWxsYWJsZSgpOyAvL3NhdmVzIGFsYnVtIGFydCA2MHB4IHNpemUgc3F1YXJlXG4gICAgICB0YWJsZS5zdHJpbmcoJ2FydF91cmwxMDAnKS5ub3ROdWxsYWJsZSgpOyAvL3NhdmVzIGFsYnVtIGFydCAxMDBweCBzaXplIHNxdWFyZVxuICAgICAgdGFibGUuZm9yZWlnbignYXJ0aXN0X2lkJykucmVmZXJlbmNlcygnYXJ0aXN0LmlkJyk7XG4gICAgICB0YWJsZS51bmlxdWUoWyd0aXRsZScsICdhcnRpc3RfaWQnXSk7IC8vZ3VhcmFudGVlcyBubyByZXBlYXRlZCBhbGJ1bXMgZm9yIGFuIGFydGlzdFxuICAgIH0pLFxuXG4gICAgLy9tYW55IHNvbmdzIHRvIG9uZSBhbGJ1bVxuICAgIGtuZXguc2NoZW1hLmNyZWF0ZVRhYmxlKCdzb25nJywgZnVuY3Rpb24odGFibGUpIHtcbiAgICAgIHRhYmxlLmluY3JlbWVudHMoJ2lkJykucHJpbWFyeSgpO1xuICAgICAgdGFibGUuc3RyaW5nKCd0aXRsZScpO1xuICAgICAgdGFibGUuaW50ZWdlcignYWxidW1faWQnKTtcbiAgICAgIHRhYmxlLmZvcmVpZ24oJ2FsYnVtX2lkJykucmVmZXJlbmNlcygnYWxidW0uaWQnKTtcbiAgICAgIHRhYmxlLnVuaXF1ZShbJ3RpdGxlJywgJ2FsYnVtX2lkJ10pO1xuICAgIH0pLFxuXG4gICAgLy9tYW55IHVzZXJzIGltcHJlc3Npb25zIHRvIG1hbnkgYWxidW1zXG4gICAga25leC5zY2hlbWEuY3JlYXRlVGFibGUoJ2FsYnVtX2ltcHJlc3Npb24nLCBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgdGFibGUuaW5jcmVtZW50cygnaWQnKS5wcmltYXJ5KCk7XG4gICAgICB0YWJsZS5pbnRlZ2VyKCd1c2VyX2lkJyk7XG4gICAgICB0YWJsZS5pbnRlZ2VyKCdhbGJ1bV9pZCcpO1xuICAgICAgdGFibGUuaW50ZWdlcigncmF0aW5nJyk7XG4gICAgICB0YWJsZS5zdHJpbmcoJ2ltcHJlc3Npb24nKTtcbiAgICAgIHRhYmxlLmZvcmVpZ24oJ3VzZXJfaWQnKS5yZWZlcmVuY2VzKCd1c2VyLmlkJyk7XG4gICAgICB0YWJsZS5mb3JlaWduKCdhbGJ1bV9pZCcpLnJlZmVyZW5jZXMoJ2FsYnVtLmlkJyk7XG4gICAgICB0YWJsZS51bmlxdWUoWyd1c2VyX2lkJywgJ2FsYnVtX2lkJ10pO1xuICAgIH0pLFxuXG4gICAgLy9tYW55IGxpc3RlbmluZyBkYXRlcyB0byBvbmUgYWxidW0gaW1wcmVzc2lvblxuICAgIGtuZXguc2NoZW1hLmNyZWF0ZVRhYmxlKCdsaXN0ZW5fZGF0ZScsIGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICB0YWJsZS5pbmNyZW1lbnRzKCdpZCcpLnByaW1hcnkoKTtcbiAgICAgIHRhYmxlLmludGVnZXIoJ2FsYnVtX2ltcHJlc3Npb25faWQnKTtcbiAgICAgIHRhYmxlLmRhdGUoJ2RhdGUnKS5ub3ROdWxsYWJsZSgpO1xuICAgICAgdGFibGUuZm9yZWlnbignYWxidW1faW1wcmVzc2lvbl9pZCcpLnJlZmVyZW5jZXMoJ2FsYnVtX2ltcHJlc3Npb24uaWQnKTtcbiAgICAgIHRhYmxlLnVuaXF1ZShbJ2FsYnVtX2ltcHJlc3Npb25faWQnLCAnZGF0ZSddKTtcbiAgICB9KVxuICBdKTtcbn07XG5cbmV4cG9ydHMuZG93biA9IGZ1bmN0aW9uKGtuZXgsIFByb21pc2UpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICBrbmV4LnNjaGVtYS5kcm9wVGFibGUoJ2xpc3Rlbl9kYXRlJyksXG4gICAga25leC5zY2hlbWEuZHJvcFRhYmxlKCdhbGJ1bV9pbXByZXNzaW9uJyksXG4gICAga25leC5zY2hlbWEuZHJvcFRhYmxlKCdzb25nJyksXG4gICAga25leC5zY2hlbWEuZHJvcFRhYmxlKCdhbGJ1bScpLFxuICAgIGtuZXguc2NoZW1hLmRyb3BUYWJsZSgnYXJ0aXN0JyksXG4gICAga25leC5zY2hlbWEuZHJvcFRhYmxlKCd1c2VyJylcbiAgXSk7XG59O1xuIl19