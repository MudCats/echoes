class EntryList extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
    <div className='entryList'>
      {this.props.allEntries.map((entry) => {
        return (
          <Entry date={entry.date.slice(0,10)}
                 title={entry.title}
                 artist={entry.name}
                 genre={entry.genre}
                 year={entry.year}
                 rating={entry.rating}
                 impression={entry.impression}
                 art_url60={entry.art_url60}
                 art_url100={entry.art_url100}
                 impressionId={entry.id}
            />
        )})
      }
    </div>
    );
  }
};

window.EntryList = EntryList;
