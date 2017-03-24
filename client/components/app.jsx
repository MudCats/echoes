class App extends React.Component {
  constructor (props) {
    super (props);
    // will hold state of all entries in database and current search values
    this.state = {
      viewingEntry: '',
      allEntries: [],
      searchResults: [],
      currentUser: '',
      spotifyAuthToken: ''
    }
  }
  // when the component loads successfully
  componentWillMount () {
    // load all of the user's data
    this.getUserEntries();
  }

  getUserEntries () {
    $.ajax({
      url: '/querydb',
      type: 'GET',
      success: (response) => {
        // sets state of all entries
        // sets current user name
        if (response.length) {
          this.setState({
            allEntries: response,
            currentUser: response[0].user
          })
        }
      },
      error: function (error) {
        console.log(error);
        throw error;
      }
    })
  };

   getFilterEntries (choice) {
    console.log("choice", choice)
    $.ajax({
      url: '/querydb/filter',
      type: 'GET',
      success: (response) => {
        // sets state of all entries
        // sets current user name
        if (response.length) {
          this.setState({
            allEntries: response,
            currentUser: response[0].user
          })
        }
      },
      error: function (error) {
        console.log(error);
        throw error;
      }
    })
  };
  // generates greeting in banner
  greetUser () {
    // if current user is identified
    if (this.state.currentUser) {
      // greet them by name
      return `Hello, ${this.state.currentUser}!`
    } else {
      // new users are greetedwith Hello
      return `Hello!`
    }
  }
  // deletes a listening instance from the db
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
  // updates a user entry
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

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("app").style.marginLeft = "250px";
  }


  // renders the app to the DOM

  render () { 
    return (
      <div>
        <div className="container-fluid app">
          <header className="navbar">
            <div><h2 className="greeting">{this.greetUser()}</h2></div>
            <a href="/signout" className='navbar-right signout'>
              <button className="btn btn-default landing"><span>Sign Out</span></button>
            </a>
            <img className='navbar-center header logo' src="styles/logo.svg"></img>
            <div  className="col-md-2 search">
              <Search getUserEntries={this.getUserEntries.bind(this)}/>
            </div>
          </header>
          <div>
            <a onClick={this.openNav.bind(this)} id="main-search" className='glyphicon-search glyphicon'>&nbsp;</a>
          </div>
          <div className="col-md-12">
            <table className="table-responsive table">
              <EntryList allEntries={this.state.allEntries}
                updateUserEntries={this.updateUserEntries.bind(this)}
                getUserEntries={this.getUserEntries.bind(this)}
                getFilterEntries={this.getFilterEntries.bind(this)}
                deleteUserEntries={this.deleteUserEntries.bind(this)}/>
              </table>
            </div>
          </div>

      </div>
    )
  }
}

window.App = App;
