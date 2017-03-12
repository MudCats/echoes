// Render the app to the DOM, passing search function with props
// TODO: Pass the app all of the albums retrieved from the db for this user
ReactDOM.render(<App search = {window.search}/>, document.getElementById('app'));
