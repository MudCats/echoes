// Searches iTunes
class SearchBar extends React.Component {

	constructor(props){
		super(props);

	}

	render(){
		return (
			<input type='text' className="search-bar form-group" data-live-search="true" placeholder="Search for an album..."
      		   onKeyDown={event => this.props.search(event.target.value)}
      		/>
		)
	}
}

window.SearchBar = SearchBar;
