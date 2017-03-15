// Render the app to the DOM
// search function passes the itunes api query
// getUserEntries queries the database for user data
ReactDOM.render(<App getUserEntries={window.getUserEntries}/>, document.getElementById('app'));
