
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album_impression').del()
    .then(function () {
      // Inserts seed entries
      return knex('album_impression').insert([
        {user_id:1, album_id:1, rating:9, impression:'Fucking loved this'},
        {user_id:2, album_id:2, rating:5, impression:'I am not sad I heard it I guess'},
        {user_id:3, album_id:3, rating:7, impression:'This is indeed bumpin'},
        {user_id:4, album_id:1, rating:8, impression:'Cats pajamas'},
        {user_id:2, album_id:3, rating:9, impression:'I LOVE this omg I cannot'},
        {user_id:2, album_id:1, rating:1, impression:'I have wasted my life'},
        {user_id:4, album_id:2, rating:2, impression:'Crushed my soul'},
      ]);
    });
};
