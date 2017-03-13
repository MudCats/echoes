
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listen_date').del()
    .then(function () {
      // Inserts seed entries
      return knex('listen_date').insert([
        {album_impression_id:1, date:'2017-03-13'},
        {album_impression_id:2, date:'2017-03-12'},
        {album_impression_id:3, date:'2017-03-11'},
        {album_impression_id:4, date:'2017-03-10'},
        {album_impression_id:5, date:'2017-03-09'},
        {album_impression_id:6, date:'2017-03-09'},
        {album_impression_id:7, date:'2017-03-08'},
        {album_impression_id:1, date:'2017-03-07'}
      ]);
    });
};
