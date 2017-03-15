class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {term: '', results: []};

	}

	onInputChange(term){
		this.setState({term});
		var query = this.state.term.split(' ').join('&20');
		var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=5';

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
				this.setState({results: data});
			},
			error: (error) => {
				console.log(error);
				return;
			}

		})

	}

	render() {
    return (
   	  <div className=''>
	      <SearchBar search={this.onInputChange.bind(this)} className="search-bar" />
	      <ResultsList data={this.state.results} className='results-container' />
	   </div>
    );
  };
};

window.Search = Search;
