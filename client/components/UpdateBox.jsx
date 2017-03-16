class UpdateBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = { modalActive:false}
  }

  openModal () {
    this.setState({ modalActive:true})
  }

  closeModal () {
    this.setState({modalActive:false})
  }

  render () {
      return (
        <div>
          {!this.state.modalActive && (
            <button onClick={this.openModal.bind(this)}>Update</button>
          )}

          {this.state.modalActive && (
            <div className='updateBox'>
              <form action='/querydb/update' method="post" id='update'>
                <textarea name='impression' cols='45' rows='5'></textarea>
                <select name='rating'>
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
                <input type="hidden" name="id" value={this.props.impressionId}></input>
                <input type='submit' name='button' value='Save'></input>
              </form>
            </div>
          )}
        </div>
      )
    }
}

window.UpdateBox = UpdateBox;
