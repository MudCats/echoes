class EntryList extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
    <table>
      <thead>User's Listening Journal</thead>
      {/* use map to iterate over albums sent via props */}
        {/* render with Entry component */}
    </table>
  )
  }
};

window.EntryList = EntryList;
