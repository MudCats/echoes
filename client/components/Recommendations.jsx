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
    var tableStyle = {
      width: '90%'
    }

    var thStyle = {
      padding: '10px'
    };

    var divStyle = {
      'text-align': 'right',
      'vertical-align': 'middle',
      'font-size' : '15px'
    }
    
    const songs = this.props.recommendations.map((song) => {
        return (
        <tr>
          <th style={thStyle}>
            <a id="popover" tabIndex="0" role="button" data-toggle="recommend" data-placement="right" width="300px" data-content={`<iframe src="//tools.applemusic.com/embed/v1/album/${song.collectionId}?country=us" height="500px" width="100%" frameborder="0"></iframe>`}>
              <img src={song.artworkUrl100} />
            </a>
          </th>
          <th>
            <div style={divStyle}> {song.collectionName}  </div>
            <div style={divStyle}>{song.artistName} </div>
            <div style={divStyle}>{song.releaseDate.slice(0,4)}  </div>
          </th>
        </tr>
        );
      });

    return (
      <table style={tableStyle}>
        
        { songs }  

      </table>
      

    );
  }
}

window.Recommendations = Recommendations;
