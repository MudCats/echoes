// Render the app to the DOM, passing search function with props
ReactDOM.render(<App search = {window.search} getUserEntries = {window.getUserEntries}/>, document.getElementById('app'));
