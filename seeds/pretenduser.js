
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Megan', username: 'yoshi', password: 'lol'},
        {name: 'Tyler', username: 'crabby', password: 'patty'},
        {name: 'Christian', username: 'banana', password: 'peel'},
        {name: 'Daniel', username: 'tomahawk', password: 'no'}
      ]);
  });
};
