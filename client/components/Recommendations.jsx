class Recommendations extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover({
        trigger: 'click',
        html: true
      });
      $('[data-toggle="recommend"]').popover({
        trigger: 'click',
        html: true
      });
    });
    
    const songs = this.props.recommendations.map((song) => {
        return (
        <div>
          <a id="popover" tabIndex="0" role="button" data-toggle="recommend" data-placement="right" width="300px" data-content={`<iframe src="//tools.applemusic.com/embed/v1/album/${song.collectionId}?country=us" height="500px" width="100%" frameborder="0"></iframe>`}>
            <img src={song.artworkUrl100} />
          </a>
          <div> {song.collectionName} </div>
          <div> {song.artistName} </div>
        </div>
        );
      });

    return (
      <div>
        {songs}
      </div>

    );
  }
}

window.Recommendations = Recommendations;
