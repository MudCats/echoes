class ResultsList extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return (
			<div>
				{this.props.albums.map((album) => <Result key={album.collectionId} album={album}/>)}
			</div>
		);
	}

}

window.ResultsList = ResultsList;