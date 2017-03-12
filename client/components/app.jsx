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
  componentDidMount () {
    // load all of the user's data
    // call this.props.getUserEntries
  }
  // adds album to the database
  add (album) {

  }
  // calls iTunes search method on window object
  search (string) {
    // calls searchiTunes and sets state of searchResults
    this.props.searchiTunes(string, (albums) => {
      this.setState({
        searchResults: albums
      });
    });
  }
  // renders the app to the DOM
  render () {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <EntryList />
        </div>
      </div>
    )
  }
}
