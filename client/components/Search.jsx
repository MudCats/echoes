class Search extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			term: '',
			results: [],
			selectedListenDate: null
		};
	}
  // sets default date for calendar input field
	componentWillMount () {
		// generates current date
		var todayDate = new Date();
		// uses moment.js to format date
		var formattedDate = moment(todayDate).format('YYYY-MM-DD');
    // sets state when component mounts
		this.setState({
			selectedListenDate: formattedDate
		});
	}
  // displays only the clicked album
	setSelected (album) {
		// date defaults to current date
		var date = $('input').val() || this.state.selectedListenDate;
    // sets state to display one album and sets state of listen date
		this.setState({
			results: [album],
			selectedListenDate: date
		});
	}
  // sends request to iTunes api
	iTunesSearch (term) {
		this.setState({term});
		// used percent encoding for iTunes API search
		var query = this.state.term.split(' ').join('%20');
		// creates search URL with limit of four results
		var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=4';

		$.ajax({
			url: searchUrl,
			data : {
				format: 'json'
			},
			type: 'GET',
			dataType: 'jsonp',
			success: (data) => {
				console.log(data);
				// changes state of results, which triggers view change
				this.setState({results: data.results});
			},
			error: (error) => {
				console.log(error);
				return;
			}
		})
	}

	// send selected album and listen date to db via post request
	addNewEntry (album, date) {
		// send object with keys album and date
		var newEntry = {album: album, date: date.slice(0,10)};
		// user can only submit one album
		if (this.state.results.length === 1) {
			$.ajax({
				url: '/querydb',
				type: 'POST',
				dataType: 'text',
				contentType: 'application/json',
				data: JSON.stringify(newEntry),
				success: (results) => {
					// clears previously set state
					this.setState({
						term: '',
						results: [],
						selectedListenDate: null
					});
          // gets user entries from db and rerenders entry list
					this.props.getUserEntries();
					// clear the search bar
					$('.search-bar').val('');
				},
				error: function (error) {
					console.log(error);
					return;
				}
			});
		}
	}

	render() {

    return (
      <div>
	   	  <div className='search-container'>
					<h3>Add an album:</h3>
					<input type="date" name="date" className="form-group search-bar"></input>
					<br></br>
		      <SearchBar search={_.debounce(this.iTunesSearch.bind(this), 300)}
						         className="search-bar" />


									 <button type="button" className="btn btn-default add-album"
							onClick={() => this.addNewEntry(this.state.results[0], this.state.selectedListenDate)}>Add an album</button>
					</div>
					<div className="results-container">
						<ResultsList albums={this.state.results}
							addNewEntry={this.props.addNewEntry}
							setSelected={this.setSelected.bind(this)}
							className='results-container' />
					</div>
			</div>

    );
  };
};

window.Search = Search;
