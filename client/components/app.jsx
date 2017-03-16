class App extends React.Component {
  constructor (props) {
    super (props);
    // will hold state of all entries in database and current search values
    this.state = {
      viewingEntry: '',
      allEntries: [],
      searchResults: []
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
        this.setState({
          allEntries: response
        })
      },
      error: function (error) {
        console.log(error);
        throw error;
      }
    })
  };

  // renders the app to the DOM
  render () {
    return (
      <div>
        <div>Hello!
          <Search getUserEntries={this.getUserEntries.bind(this)}/>
        </div>
        <div>
          <EntryList allEntries={this.state.allEntries}/>
        </div>
      </div>
    )
  }
}

window.App = App;
