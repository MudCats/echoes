// searches the iTunes api for album information
// pass url from search bar, and callback
var searchiTunes = function (userEntry, callback) {
  // encodes search for use in AJAX request
  var query = userEntry.split(' ').join('%20');
  // creates search request from user input
  // allows search by any terms but returns up to five albums
  var searchUrl = `https://itunes.apple.com/search?term=?${query}&entity=album&limit=5`

  $.ajax({
    url: url,
    type: 'GET',
    success: function (data) {
      // data.results is an array of album objects
      return callback(data.results);
    },
    error: function (error) {
      console.log(error);
      throw error;
    }
  });
}

window.searchiTunes = searchiTunes;
