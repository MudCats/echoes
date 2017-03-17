class UpdateBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalActive:false,
      rating: '',
      impression: ''
    };
  }

  openModal () {
    this.setState({ modalActive:true})
  }

  closeModal () {
    this.setState({modalActive:false})
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.updateUserEntries(this.props.impressionId, this.state.rating, this.state.impression, this.props.getUserEntries);
    this.closeModal();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteUserEntries(this.props.impressionId, this.props.date, this.props.getUserEntries);
    this.closeModal();
  }


  render () {
      return (
        <td className='col-md-3'>
          {!this.state.modalActive && (
            <div className='btn-group'>
              <button className='update' onClick={this.openModal.bind(this)}>Update</button>
              <br></br>
              <button className='remove' onClick={this.handleDelete.bind(this)}>Remove</button>
            </div>
          )}
          {this.state.modalActive && (
            <div className='update'>
              <span className='close glyphicon glyphicon-remove' onClick={this.closeModal.bind(this)}></span>
              <form id='update' onSubmit={this.handleSubmit.bind(this)}>
                <textarea id='impression' name='impression'
                                          cols='25'
                                          rows='4'
                                          value={this.state.impression}
                                          onChange={this.handleInputChange.bind(this)}
                                          required></textarea>
                <br></br>
                <select name='rating' id='rating' value={this.state.rating} onChange={this.handleInputChange.bind(this)} required>
                  <option value={null}>Rating</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
                <input type='submit' id="submit" name='button' value='Save'></input>
              </form>
            </div>
          )}
      </td>
      )
    }
}

window.UpdateBox = UpdateBox;
