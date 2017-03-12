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
  // calls iTunes search method on window object
  search (string) {
    // calls searchiTunes and sets state of searchResults
    this.props.searchiTunes(string, (albums) => {
      this.setState({
        searchResults: albums
      });
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
      </div>
      <div>
        <EntryList />
      </div>
    )
  }
}
