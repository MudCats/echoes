class Result extends React.Component {
	constructor(props){
		super(props);
	}


	render () {
		return (
		<div onClick={() => this.props.setSelected(this.props.album)}>
			<img src={this.props.album.artworkUrl100}/>
			<div>{this.props.album.artistName}</div>
			<div>{this.props.album.collectionName}</div>
			<div>{this.props.album.copyright.substring(2, 6)}</div>
		</div>

		)
	}

}

window.Result = Result;
