class Result extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return (
		<div>
			<img src={this.props.album.artworkUrl100}/>
			<div>{}</div>
		</div>

		)
	}

}

window.Result = Result;
