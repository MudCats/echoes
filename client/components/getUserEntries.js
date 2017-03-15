// retrieves user data from database
// pass username for database search
// TODO: verify that user data can be send with get request
var getUserEntries = function (callback) {
  $.ajax({
    url: '/querydb',
    type: 'GET',
    success: function (response) {
      callback(response);
    },
    error: function (error) {
      console.log(error);
      throw error;
    }
  })
};

// make accessible on the window
window.getUserEntries = getUserEntries;
