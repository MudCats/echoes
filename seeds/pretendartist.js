
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {name: 'Fleet Foxes'},
        {name: 'The Replacements'},
        {name: 'Kanye West'}
      ]);
    });
};
