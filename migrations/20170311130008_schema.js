
exports.up = function(knex, Promise) {
  return Promise.all([
    //users
    knex.schema.createTable('user', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('username').unique().notNullable();
      table.string('password').notNullable();
    }),

    //artists
    knex.schema.createTable('artist', function(table) {
      table.increments('id').primary();
      table.string('name').unique().notNullable();
    }),

    //many albums to one artist
    knex.schema.createTable('album', function(table) {
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
    knex.schema.createTable('song', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('album_id');
      table.foreign('album_id').references('id').inTable('album');
      table.unique(['title', 'album_id']);
    }),

    //many users impressions to many albums
    knex.schema.createTable('album_impression', function(table) {
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
    knex.schema.createTable('listen_date', function(table) {
      table.increments('id').primary();
      table.integer('album_impression_id');
      table.date('date').notNullable();
      table.foreign('album_impression_id').references('album_impression.id');
      table.unique(['album_impression_id', 'date']);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.dropTable('user'),
    knex.dropTable('artist'),
    knex.dropTable('album'),
    knex.dropTable('song'),
    knex.dropTable('user_album'),
    knex.dropTable('listen_date')
  ]);
};
