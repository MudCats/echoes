// retrieves user data from database
// pass username for database search
// TODO: verify that user data can be send with get request
var getUserEntries = function (username, callback) {
  $.ajax({
    url: '/querydb',
    type: 'GET',
    data: {
      username: username
    },
    success: function (response) {
      return callback(response);
    },
    error: function (error) {
      console.log(error);
      throw error;
    }
  })
};

// make accessible on the window object
window.getUserEntries = getUserEntries;
