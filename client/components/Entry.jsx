var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;
var Overlay = ReactBootstrap.Overlay;
var Popover = ReactBootstrap.Popover;
var Tooltip = ReactBootstrap.Tooltip;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
class Entry extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      month:'',
      track: '',
      rating: this.props.rating,
      showModal: false,
      recommendations: []
    }

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

  }

  close() {
    this.setState({ showModal: false });
  }

  componentWillMount () {
    this.setState ({
      month:this.props.date.slice(5,7)
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.updateUserEntries(this.props.impressionId, nextValue, '', this.props.getUserEntries)
  }

  onReccomendClick() {
    var query = this.props.title.split(' ').join('%20');

    fetch('/spotify?q=' + query )
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ showModal: true });
      console.log(data);
      this.setState({ target: e.target, show: !this.state.show });
      for (var track of data) {
        return this.iTunesSearch(track.name)
        .then(result => {
          console.log(result);
        })
      }
    })
    .catch(error => {
      console.log(error);
    });

  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteUserEntries(this.props.impressionId, this.props.date, this.props.title, this.props.getUserEntries);
  }

  iTunesSearch (title, callback) {
    // used percent encoding for iTunes API search
    var query = title.split(' ').join('%20');
    // creates search URL with limit of four results
    var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=1';

    $.ajax({
      url: searchUrl,
      data : {
        format: 'json'
      },
      type: 'GET',
      dataType: 'jsonp',
      success: (data) => {
        return data;
        // changes state of results, triggering view change
      },
      error: (error) => {
        console.log(error);
        return;
      }
    })
  }


  render () {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

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

            <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="default"
          bsSize="small"
          onClick={this.onReccomendClick.bind(this)}
        >
          Discover more
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Recommendations</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <Recommendations recommendations={this.state.recommendations} />
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
          
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
