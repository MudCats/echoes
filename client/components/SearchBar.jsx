class SearchBar extends React.Component {

	constructor(props){
		super(props);

	}


	render(){
		return (
			<input type='text'
      		   onKeyUp={event => this.props.search(event.target.value)}
      		/>
		)
	}

}

window.SearchBar = SearchBar;
