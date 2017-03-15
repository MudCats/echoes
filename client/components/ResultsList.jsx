class ResultsList extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return (
			<table>
				<tbody>
					{this.props.albums.map((album) => <Result key={album.collectionId} album={album}/>)}
				</tbody>
			</table>
		);
	}

}

window.ResultsList = ResultsList;
