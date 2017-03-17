class Entry extends React.Component {
  constructor (props) {
    super (props)
  }
  render () {
    return (
      <div className='entry'>
        <div className='listenDate'>{this.props.date}</div>
        <div className='albumArt'>
          <img src={this.props.art_url100} />
        </div>
        <div className='albumInfo'>
          <h3>{this.props.title}</h3>
          <h4>{this.props.artist}</h4>
          <p>{this.props.year}</p>
          <p>{this.props.genre}</p>
        </div>
        <div className='userInput'>
          <div>{this.props.impression}</div>
          <div>{this.props.rating}</div>
        </div>
        <UpdateBox impressionId={this.props.impressionId}
                   date={this.props.date}
                   updateUserEntries={this.props.updateUserEntries}
                   getUserEntries={this.props.getUserEntries}
                   deleteUserEntries={this.props.deleteUserEntries}/>
      </div>
    )
  }
}

window.Entry = Entry;
