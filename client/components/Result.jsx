class Result extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return (
		<div>
			<img src={this.props.album.artworkUrl100}/>
		</div>

		)
	}

}

window.Result = Result;
