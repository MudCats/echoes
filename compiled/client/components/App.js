'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    // will hold state of all entries in database and current search values
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      viewingEntry: '',
      allEntries: [],
      searchResults: []
    };
    return _this;
  }
  // when the component loads successfully


  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
    // load all of the user's data

    // adds album to the database

  }, {
    key: 'add',
    value: function add(album) {}
    // calls iTunes search method on window object

  }, {
    key: 'search',
    value: function search(string) {
      var _this2 = this;

      // calls searchiTunes and sets state of searchResults
      this.props.searchiTunes(string, function (albums) {
        _this2.setState({
          searchResults: albums
        });
      });
    }
    // renders the app to the DOM

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(SearchBar, null)
        ),
        React.createElement(
          'div',
          null,
          React.createElement(EntryList, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZXdpbmdFbnRyeSIsImFsbEVudHJpZXMiLCJzZWFyY2hSZXN1bHRzIiwiYWxidW0iLCJzdHJpbmciLCJzZWFyY2hpVHVuZXMiLCJhbGJ1bXMiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFFbEI7QUFGa0IsMEdBQ1hBLEtBRFc7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxFQURIO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMscUJBQWU7QUFISixLQUFiO0FBSGtCO0FBUW5CO0FBQ0Q7Ozs7O3dDQUNxQixDQUVwQjtBQURDOztBQUVGOzs7O3dCQUNLQyxLLEVBQU8sQ0FFWDtBQUNEOzs7OzJCQUNRQyxNLEVBQVE7QUFBQTs7QUFDZDtBQUNBLFdBQUtOLEtBQUwsQ0FBV08sWUFBWCxDQUF3QkQsTUFBeEIsRUFBZ0MsVUFBQ0UsTUFBRCxFQUFZO0FBQzFDLGVBQUtDLFFBQUwsQ0FBYztBQUNaTCx5QkFBZUk7QUFESCxTQUFkO0FBR0QsT0FKRDtBQUtEO0FBQ0Q7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFNBQUQ7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsU0FBRDtBQURGO0FBSkYsT0FERjtBQVVEOzs7O0VBdkNlRSxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgLy8gd2lsbCBob2xkIHN0YXRlIG9mIGFsbCBlbnRyaWVzIGluIGRhdGFiYXNlIGFuZCBjdXJyZW50IHNlYXJjaCB2YWx1ZXNcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld2luZ0VudHJ5OiAnJyxcbiAgICAgIGFsbEVudHJpZXM6IFtdLFxuICAgICAgc2VhcmNoUmVzdWx0czogW11cbiAgICB9XG4gIH1cbiAgLy8gd2hlbiB0aGUgY29tcG9uZW50IGxvYWRzIHN1Y2Nlc3NmdWxseVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gbG9hZCBhbGwgb2YgdGhlIHVzZXIncyBkYXRhXG4gIH1cbiAgLy8gYWRkcyBhbGJ1bSB0byB0aGUgZGF0YWJhc2VcbiAgYWRkIChhbGJ1bSkge1xuXG4gIH1cbiAgLy8gY2FsbHMgaVR1bmVzIHNlYXJjaCBtZXRob2Qgb24gd2luZG93IG9iamVjdFxuICBzZWFyY2ggKHN0cmluZykge1xuICAgIC8vIGNhbGxzIHNlYXJjaGlUdW5lcyBhbmQgc2V0cyBzdGF0ZSBvZiBzZWFyY2hSZXN1bHRzXG4gICAgdGhpcy5wcm9wcy5zZWFyY2hpVHVuZXMoc3RyaW5nLCAoYWxidW1zKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VhcmNoUmVzdWx0czogYWxidW1zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvLyByZW5kZXJzIHRoZSBhcHAgdG8gdGhlIERPTVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEVudHJ5TGlzdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19