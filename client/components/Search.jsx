class Search extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			term: '',
			results: [],
			selectedListenDate: this.setDate
		};

		this.state.selectedListenDate = this.setDate()
	}
  // sets default date for calendar input field
	setDate () {
    console.log("setDate")
		// generates current date
		var todayDate = new Date();
		// uses moment.js to format date
		var formattedDate = moment(todayDate).format('YYYY-MM-DD');
    // return the date
    console.log("formattedDate", formattedDate)
		return formattedDate;
	}
	componentWillMount () {
		var date = this.setDate()
		this.setState({
			selectedListenDate: date
		});
		    console.log("mounted2")
	}
  // gets and formats the current date
  // displays only the clicked album
	setSelected (album) {
		// date defaults to current date
		var date = $('#calDate').val() || this.state.selectedListenDate;
    // sets state to display one album and sets state of listen date
    if(album){
			this.setState({
				results: [album],
				selectedListenDate: date
			});
    }
	}

	setDateState () {
		// date defaults to current date
		var date = $('#calDate').val() || this.state.selectedListenDate;

		this.state.selectedListenDate = date;
	}
  // sends request to iTunes api
	iTunesSearch (term) {
		this.setState({term});
		// used percent encoding for iTunes API search
		var query = this.state.term.split(' ').join('%20');
		// creates search URL with limit of four results
		var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=10';

		$.ajax({
			url: searchUrl,
			data : {
				format: 'json'
			},
			type: 'GET',
			dataType: 'jsonp',
			success: (data) => {
				// changes state of results, triggering view change
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
    console.log('addNewEntry', album)
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
					// assigns current date to state
					// clears previously set state
					var date = this.setDate();
					this.setState({
						term: '',
						results: [],
						selectedListenDate: date
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


  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("app").style.marginLeft = "0";
  }

	render() {

		// only renders the add album button if one album is selected
		if (this.state.results.length === 1) {
			$('#add-album-btn').show(800);
		} else {
			$('#add-album-btn').hide(800);
		}

    return (
      <div id="mySidenav" className="sidenav">

	   	  <div className='search-container'>
					<table>
          <tbody>
						<tr>
							<td>
								<span className='glyphicon glyphicon-search'>&nbsp;</span>
                  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
							</td>
							<td width="200px">
					      <SearchBar search={this.iTunesSearch.bind(this)}
									className="search-bar" />
							</td>
						</tr>

						<tr>
							<td>
								<span className='glyphicon glyphicon-calendar'>&nbsp;</span>
							</td>
							<td>
								<input id="calDate" type="date" name="date" min="2017-01-01" max={this.setDate()} onChange={this.setDateState.bind(this)}className="form-group search-bar"></input>
							</td>
						</tr>

						<tr>
							<td>&nbsp;</td>
							<td>
								<div id='add-album-btn' onClick={() => {this.addNewEntry(this.state.results[0], this.state.selectedListenDate)}}>
								  <button type="button" className="btn btn-default">Add this album</button>
				        </div>
			        </td>
						</tr>

            </tbody>
					</table>

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
