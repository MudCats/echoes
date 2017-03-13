
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert([
        {title:'Helplessness Blues', artist_id:1, genre:'Alternative', year:2011, art_url60:'http://is5.mzstatic.com/image/thumb/Music60/v4/6c/7d/e5/6c7de567-99ff-e8ab-46ad-07ddab4b1d32/source/60x60bb.jpg', art_url100:'http://is5.mzstatic.com/image/thumb/Music60/v4/6c/7d/e5/6c7de567-99ff-e8ab-46ad-07ddab4b1d32/source/100x100bb.jpg'},
        {title:'Pleased to Meet Me', artist_id:2, genre:'Rock', year:1987, art_url60:'http://is3.mzstatic.com/image/thumb/Music/v4/61/55/3a/61553af0-864d-dc75-449e-659e758e6a6e/source/60x60bb.jpg', art_url100:'http://is3.mzstatic.com/image/thumb/Music/v4/61/55/3a/61553af0-864d-dc75-449e-659e758e6a6e/source/100x100bb.jpg'},
        {title:'The Life of Pablo', artist_id:3, genre:'Hip-Hop/Rap', year:2016, art_url60:'http://is3.mzstatic.com/image/thumb/Music20/v4/c0/98/d0/c098d05b-7bcc-0ea3-0213-0f69992fda65/source/60x60bb.jpg', art_url100:'http://is3.mzstatic.com/image/thumb/Music20/v4/c0/98/d0/c098d05b-7bcc-0ea3-0213-0f69992fda65/source/100x100bb.jpg'}
      ]);
    });
};
