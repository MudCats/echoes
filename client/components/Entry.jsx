class Entry extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      month:'',
      sampleURL: '',
      rating: this.props.rating
    }
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
        console.log('data', data);
        this.setState({sampleURL: data.results[0].previewUrl});
      },
      error: (error) => {
        console.log(error);
        return;
      }
    })
  };

  onStarClick(nextValue, prevValue, name) {
    console.log("nextvalue", nextValue)
    console.log("prevValue", prevValue)
    console.log("name", name)
    this.setState({rating: nextValue});
    console.log("this.state", this.state.rating)
  }


  render () {
    return (
      <tr className='entry row'>
        <td className='listenDate col-md-1 col-lg-1'>
          <span className='month'><h4>{moment.months(this.state.month - 1)}</h4> </span>
          <span className='day'><h4>{this.props.date.slice(8, 10)}</h4></span>
          <span className='year'>{this.props.date.slice(0,4)}</span>
        </td>

        <td className='col-md-1 col-lg-1'>
          <div>
            <img className='albumArt' src={this.props.art_url100} />
          </div>
        </td>

        <td className='albumInfo col-md-2 col-lg-2'>
          <div>
            <h3>{this.props.title}</h3>
            <h4>{this.props.artist}</h4>
            <p>{this.props.year}</p>
            <p>{this.props.genre}</p>
          </div>
        </td>

        <td>
        <ReactStarRatingComponent
          name="ratetest"
          starcount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        </td>

        <td className='sample col-md-3'>
          <audio src={this.state.sampleURL} type="audio/mpeg" controls>
          </audio>
        </td>

        <UpdateBox impressionId={this.props.impressionId}
                   date={this.props.date}
                   impression={this.props.impression}
                   rating={this.props.rating}
                   updateUserEntries={this.props.updateUserEntries}
                   getUserEntries={this.props.getUserEntries}
                   deleteUserEntries={this.props.deleteUserEntries}
        />

       <td className='impression col-md-2'>
         <div>
          {this.props.impression}
         </div>
       </td>

      </tr>
    )
  }
}

window.Entry = Entry;
