class ResultsList extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return (
			<table>
				<tbody>
					{this.props.albums.map((album) => <Result album={album}/>)}
				</tbody>
			</table>

			<Result />
		);
	}

}

window.ResultsList = ResultsList;
