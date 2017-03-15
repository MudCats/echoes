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
    var context = this;
    this.props.getUserEntries(function (results) {
      context.setState({allEntries: results});
    });

  }

  // renders the app to the DOM
  render () {
    return (
      <div>
        <div>Hello!
          <Search />
        </div>
        <div>
          <EntryList allEntries={this.state.allEntries}/>
        </div>
      </div>
    )
  }
}

window.App = App;
