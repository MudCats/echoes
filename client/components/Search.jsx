class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			term: '',
			results: [],
			selectedListenDate: null
		};
	}

	setSelected (album) {
    var date = $('input').val();

		this.setState({
			results: [album],
			selectedListenDate: date
		});
	}
  // sends request to iTunes api
	iTunesSearch (term){
		this.setState({term});
		var query = this.state.term.split(' ').join('&20');
		var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=8';

		console.log(searchUrl);

		$.ajax({
			url: searchUrl,
			data : {
				format: 'json'
			},
			type: 'GET',
			dataType: 'jsonp',
			success: (data) => {
				console.log(data);
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
		if (this.state.results.length === 1 && this.state.selectedListenDate) {
			$.ajax({
				url: '/querydb',
				type: 'POST',
				dataType: 'json',
				contentType: 'application/json',
				data: JSON.stringify(newEntry),
				success: function (results) {
					console.log(results);
					this.setState({
						term: '',
						results: [],
						selectedListDate: null
					})
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
   	  <div className=''>
				<input type="date" name="date"></input>
				<br></br>
	      <SearchBar search={_.debounce(this.iTunesSearch.bind(this), 300)} className="search-bar" />
				<button type="button" onClick={() => this.addNewEntry(this.state.results[0], this.state.selectedListenDate)}>Add an album</button>
	      <ResultsList albums={this.state.results} addNewEntry={this.props.addNewEntry} setSelected={this.setSelected.bind(this)} className='results-container' />
	   </div>
    );
  };
};

window.Search = Search;
