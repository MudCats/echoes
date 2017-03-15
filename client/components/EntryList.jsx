class EntryList extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      {/* use map to iterate over albums sent via props */}
      {this.props.allEntries.map((entry) => {
        return (
          <Entry date={entry.date}
                 title={entry.title}
                 artist={entry.name}
                 genre={entry.genre}
                 year={entry.year}
                 rating={entry.rating}
                 impression={entry.impression}
                 art_url60={entry.art_url60}
                 art_url100={entry.art_url100}
                 album_impression_id={entry.album_impression_id} />
        )
      })}
  )
  }
};

window.EntryList = EntryList;
