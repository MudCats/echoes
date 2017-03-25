class UpdateBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalActive:false,
      rating: '',
      impression: ''
    };
  }

  //show updateBox
  openModal () {
    this.setState({ modalActive:true})
  }

  //hide updateBox
  closeModal () {
    this.setState({modalActive:false})
  }

  // handles all form value changes
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //handles submiting form
  handleSubmit (e) {
    e.preventDefault();
    this.props.updateUserEntries(this.props.impressionId, this.state.rating, this.state.impression, this.props.getUserEntries);
    this.closeModal();
  }

  // handles deleting whole entry from the database
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteUserEntries(this.props.impressionId, this.props.date, this.props.title, this.props.getUserEntries);
    this.closeModal();
  }


  render () {
    return (
      // div
      <div className='col-md-8'>
        <td className='impression col-md-8 pull-left'>
          <div>
            {this.props.impression}
          </div>
        </td>

        {!this.state.modalActive && (
          <div className='btn-group' role="group">

            {/* update button -- do not remove a tags.
              They are necessary to maintain working buttons while keeping bootstrap styling */}
                      {/*  delete button */}
            <a onClick={this.handleDelete.bind(this)}>
              <button className='remove btn btn-default'>
                {/* remove button */}
                <span className='glyphicon glyphicon-remove'></span>
              </button>
            </a>

            {/*  EDIT button */}
            <a onClick={this.openModal.bind(this)}>
              <button className='update btn btn-default'>
                {/* pencil icon */}
                <span className='glyphicon glyphicon-pencil'></span>
              </button>
            </a>



          </div>
        )}

        {this.state.modalActive && (
          <div className='update'>
            {/* remove icon */}
            <form id='update' onSubmit={this.handleSubmit.bind(this)}>
              {/* impression box */}
              <textarea className='form-control' id='impression' name='impression'
                cols='10'
                rows='4'
                value={this.state.impression}
                onChange={this.handleInputChange.bind(this)}
                placeholder='Write your impression...'>
              </textarea>
              <div className='input-group'>
                <span className='input-group-btn'>
                  <button className='btn btn-default' type='submit' id="submit" name='button' > Save </button>
                  {/* cancel button */}
                  <button className='btn btn-default' type='submit' id="submit" name='button' onClick={this.closeModal.bind(this)} >Cancel</button>
                </span>
              </div>
            </form>
          </div>
        )}




      </div>

    )
  }
}

window.UpdateBox = UpdateBox;
