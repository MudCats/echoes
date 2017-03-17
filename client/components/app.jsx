class App extends React.Component {
  constructor (props) {
    super (props);
    // will hold state of all entries in database and current search values
    this.state = {
      viewingEntry: '',
      allEntries: [],
      searchResults: [],
      currentUser: ''
    }
  }
  // when the component loads successfully
  componentWillMount () {
    // load all of the user's data
    this.getUserEntries();
  }
  // gets all entries from a user
  getUserEntries () {
    $.ajax({
      url: '/querydb',
      type: 'GET',
      success: (response) => {
        // sets state of all entries
        // sets current user name
        this.setState({
          allEntries: response,
          currentUser: response[0].user
        })
      },
      error: function (error) {
        console.log(error);
        throw error;
      }
    })
  };
  // deletes a 
  deleteUserEntries (id, date, callback) {
    $.ajax({
      url:'/querydb/delete',
      type:'POST',
      data: {
        impressionId: id,
        date: date
      },
      success: function (response) {
        console.log(response);
        callback();
      },
      error: function (error) {
        console.log(error);
        throw error;
      }
    })
  }

  updateUserEntries (id, rating, impression, callback) {
    $.ajax({
      url:'/querydb/update',
      type:'POST',
      data:{
        id: id,
        rating: rating,
        impression: impression
      },
      success: function (response) {
         callback();
      },
      error: function (error) {
        console.log(error);
        throw error;
      }
    })
  }

  // renders the app to the DOM
  render () {
    return (
      <div>
        <div>Hello, {this.state.currentUser}!
          <Search getUserEntries={this.getUserEntries.bind(this)}/>
        </div>
        <div>
          <EntryList allEntries={this.state.allEntries}
                     updateUserEntries={this.updateUserEntries.bind(this)}
                     getUserEntries={this.getUserEntries.bind(this)}
                     deleteUserEntries={this.deleteUserEntries.bind(this)}/>
        </div>
      </div>
    )
  }
}

window.App = App;
