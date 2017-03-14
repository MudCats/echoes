class SearchBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);

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
			},
			error: (error) => {
				console.log(error);
				return;
			}

		})

	}

	render() {
    return (
      <div className="SearchBar">
      	<input type='text'
      		   value={this.state.term}
      		   onChange={event => this.onInputChange(event.target.value)}
      	/>

      </div>
    );
  };
};

window.SearchBar = SearchBar;
