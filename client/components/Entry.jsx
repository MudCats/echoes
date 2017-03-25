class Entry extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      month:'',
      track: '',
      rating: this.props.rating
    }

    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover({
        trigger: 'click',
        html: true
      });
    });

  }

  componentWillMount () {
    this.setState ({
      month:this.props.date.slice(5,7)
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.updateUserEntries(this.props.impressionId, nextValue, '', this.props.getFilterEntries, this.props.filter)
  }

  onReccomendClick() {
    var query = this.props.title.split(' ').join('%20');

    fetch('/spotify?q=' + query )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteUserEntries(this.props.impressionId, this.props.date, this.props.title, this.props.getUserEntries);
  }


  render () {
    return (
      <tr className='entry row'>
        <td className='listenDate col-md-1 col-lg-1'>
          <span className='month'><h5>{moment.months(this.state.month - 1)}</h5> </span>
          <span className='day'><h5>{this.props.date.slice(8, 10)}</h5></span>
          <span className='year'>{this.props.date.slice(0,4)}</span>
        </td>

        <td className='albumArt col-md-1'>
          <a id="popover" tabIndex="0" role="button" data-toggle="popover" data-placement="auto" width="300px" data-content={`<iframe src="//tools.applemusic.com/embed/v1/album/${this.props.collection_id}?country=us" height="500px" width="100%" frameborder="0"></iframe>`}>
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

        <td className="col-md-6">
          <UpdateBox
            impressionId={this.props.impressionId}
            date={this.props.date}
            impression={this.props.impression}
            rating={this.props.rating}
            title={this.props.title}
            updateUserEntries={this.props.updateUserEntries}
            getUserEntries={this.props.getUserEntries}
            deleteUserEntries={this.props.deleteUserEntries}
          />
        </td>

        <td>
          <a onClick={this.handleDelete.bind(this)}>
            <button className='remove btn btn-default'>
              {/* remove button */}
              <span className='glyphicon glyphicon-remove'></span>
            </button>
          </a>
        </td>
      </tr>
    )
  }
}

window.Entry = Entry;
