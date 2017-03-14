
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        //password: megan
        {name: 'Megan', username: 'megan', password: '$2a$10$BRAo12aONMpXSPSOPzTqOugyM.44Nw2Id6MKByQUQ6GV5YzZa2z6G'},
        //password: tyler
        {name: 'Tyler', username: 'tyler', password: '$2a$10$aFA0T208t.Qkx5a6JRIJqekG1Mzg3chwS7bO9Z3R6xZxsMp.PGL7q'},
        //password: christian
        {name: 'Christian', username: 'christian', password: '$2a$10$bkRv5TaXhKeG6zCC4Yphs.kZtuWw2KYPyUcz6PRobWjRFVA4sQzf6'},
        //password: daniel
        {name: 'Daniel', username: 'daniel', password: '$2a$10$Gpg7AT2UVoIG7J47hT8mIOFKGYO5OWr/3ES3me3nLvm3ufRzkNBB6'}
      ]);
  });
};
