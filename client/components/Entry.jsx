class Entry extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      month:'',
      sampleURL: '',
      track: '',
      rating: this.props.rating
    }

    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover({
        html: true
      });
    });

    this.sampleSearch(this.props.title, this.props.artist);
  }

  componentWillMount () {
    this.setState ({
      month:this.props.date.slice(5,7)
    })
  }

  sampleSearch (title, artist) {
    console.log(title, artist)
    var query = title +' '+ artist;
    var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=song&limit=1';

    $.ajax({
      url: searchUrl,
      data : {
        format: 'json'
      },
      type: 'GET',
      dataType: 'jsonp',
      success: (data) => {
        this.setState({
          sampleURL: data.results[0].previewUrl,
          track: data.results[0].trackName,
          albumId: data.results[0].collectionId
        });
      },
      error: (error) => {
        console.log(error);
        return;
      }
    })
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.updateUserEntries(this.props.impressionId, nextValue, '', this.props.getUserEntries)
  }

  onReccomendClick() {
    var query = this.props.title.split(' ').join('%20');
    fetch('/spotify=?$' + query )
    .then((response) => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

  }


  render () {
    console.log("Entry render was called!!! rating: ", this.state.rating)
    return (
      <tr className='entry row'>
        <td className='listenDate col-md-1 col-lg-1'>
          <span className='month'><h5>{moment.months(this.state.month - 1)}</h5> </span>
          <span className='day'><h5>{this.props.date.slice(8, 10)}</h5></span>
          <span className='year'>{this.props.date.slice(0,4)}</span>
        </td>

        <td className='albumArt col-md-1'>
          <a tabIndex="0" role="button" data-toggle="popover" data-trigger="manual focus" data-placement="left" width="300px" data-content={`<iframe src="//tools.applemusic.com/embed/v1/album/${this.state.albumId}?country=us" height="500px" width="100%" frameborder="0"></iframe>`}>
            <img src={this.props.art_url100} />
          </a>
          <p className="album-info">
            Click to sample.
          </p>
        </td>

        <td className='albumInfo col-md-2 col-lg-2'>
          <div>
            <h4>{this.props.title}</h4>
            <h5>{this.props.artist}</h5>
            <p>{this.props.year}</p>
          </div>
        </td>

        <td className="col-md-3">
          <ReactStarRatingComponent
            name="ratetest"
            starcount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick.bind(this)}
          />

          <button onClick={this.onReccomendClick.bind(this)}> 
            Click for more like this
          </button>
        </td>

        <td className='impression col-md-2'>
          <div>
            {this.props.impression}
          </div>
        </td>

        <td className="col-md-2">
          <UpdateBox 
            impressionId={this.props.impressionId}
            date={this.props.date}
            impression={this.props.impression}
            rating={this.props.rating}
            updateUserEntries={this.props.updateUserEntries}
            getUserEntries={this.props.getUserEntries}
            deleteUserEntries={this.props.deleteUserEntries}
          />
        </td>
      </tr>
    )
  }
}

window.Entry = Entry;
