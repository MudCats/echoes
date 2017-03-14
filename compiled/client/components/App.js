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
    // call this.props.getUserEntries

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
          'Hello!',
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
<<<<<<< HEAD

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZXdpbmdFbnRyeSIsImFsbEVudHJpZXMiLCJzZWFyY2hSZXN1bHRzIiwiYWxidW0iLCJzdHJpbmciLCJzZWFyY2hpVHVuZXMiLCJhbGJ1bXMiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFFbEI7QUFGa0IsMEdBQ1hBLEtBRFc7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxFQURIO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMscUJBQWU7QUFISixLQUFiO0FBSGtCO0FBUW5CO0FBQ0Q7Ozs7O3dDQUNxQixDQUdwQjtBQUZDO0FBQ0E7O0FBRUY7Ozs7d0JBQ0tDLEssRUFBTyxDQUVYO0FBQ0Q7Ozs7MkJBQ1FDLE0sRUFBUTtBQUFBOztBQUNkO0FBQ0EsV0FBS04sS0FBTCxDQUFXTyxZQUFYLENBQXdCRCxNQUF4QixFQUFnQyxVQUFDRSxNQUFELEVBQVk7QUFDMUMsZUFBS0MsUUFBTCxDQUFjO0FBQ1pMLHlCQUFlSTtBQURILFNBQWQ7QUFHRCxPQUpEO0FBS0Q7QUFDRDs7Ozs2QkFDVTtBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxTQUFEO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFNBQUQ7QUFERjtBQUpGLE9BREY7QUFVRDs7OztFQXhDZUUsTUFBTUMsUzs7QUEyQ3hCQyxPQUFPYixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICAvLyB3aWxsIGhvbGQgc3RhdGUgb2YgYWxsIGVudHJpZXMgaW4gZGF0YWJhc2UgYW5kIGN1cnJlbnQgc2VhcmNoIHZhbHVlc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3aW5nRW50cnk6ICcnLFxuICAgICAgYWxsRW50cmllczogW10sXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIHRoZSBjb21wb25lbnQgbG9hZHMgc3VjY2Vzc2Z1bGx5XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyBsb2FkIGFsbCBvZiB0aGUgdXNlcidzIGRhdGFcbiAgICAvLyBjYWxsIHRoaXMucHJvcHMuZ2V0VXNlckVudHJpZXNcbiAgfVxuICAvLyBhZGRzIGFsYnVtIHRvIHRoZSBkYXRhYmFzZVxuICBhZGQgKGFsYnVtKSB7XG5cbiAgfVxuICAvLyBjYWxscyBpVHVuZXMgc2VhcmNoIG1ldGhvZCBvbiB3aW5kb3cgb2JqZWN0XG4gIHNlYXJjaCAoc3RyaW5nKSB7XG4gICAgLy8gY2FsbHMgc2VhcmNoaVR1bmVzIGFuZCBzZXRzIHN0YXRlIG9mIHNlYXJjaFJlc3VsdHNcbiAgICB0aGlzLnByb3BzLnNlYXJjaGlUdW5lcyhzdHJpbmcsIChhbGJ1bXMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hSZXN1bHRzOiBhbGJ1bXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8vIHJlbmRlcnMgdGhlIGFwcCB0byB0aGUgRE9NXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+SGVsbG8hXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RW50cnlMaXN0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZXdpbmdFbnRyeSIsImFsbEVudHJpZXMiLCJzZWFyY2hSZXN1bHRzIiwiYWxidW0iLCJzdHJpbmciLCJzZWFyY2hpVHVuZXMiLCJhbGJ1bXMiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFFbEI7QUFGa0IsMEdBQ1hBLEtBRFc7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxFQURIO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMscUJBQWU7QUFISixLQUFiO0FBSGtCO0FBUW5CO0FBQ0Q7Ozs7O3dDQUNxQixDQUdwQjtBQUZDO0FBQ0E7O0FBRUY7Ozs7d0JBQ0tDLEssRUFBTyxDQUVYO0FBQ0Q7Ozs7MkJBQ1FDLE0sRUFBUTtBQUFBOztBQUNkO0FBQ0EsV0FBS04sS0FBTCxDQUFXTyxZQUFYLENBQXdCRCxNQUF4QixFQUFnQyxVQUFDRSxNQUFELEVBQVk7QUFDMUMsZUFBS0MsUUFBTCxDQUFjO0FBQ1pMLHlCQUFlSTtBQURILFNBQWQ7QUFHRCxPQUpEO0FBS0Q7QUFDRDs7Ozs2QkFDVTtBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsU0FBRDtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxTQUFEO0FBREY7QUFKRixPQURGO0FBVUQ7Ozs7RUF4Q2VFLE1BQU1DLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICAvLyB3aWxsIGhvbGQgc3RhdGUgb2YgYWxsIGVudHJpZXMgaW4gZGF0YWJhc2UgYW5kIGN1cnJlbnQgc2VhcmNoIHZhbHVlc1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3aW5nRW50cnk6ICcnLFxuICAgICAgYWxsRW50cmllczogW10sXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIHRoZSBjb21wb25lbnQgbG9hZHMgc3VjY2Vzc2Z1bGx5XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyBsb2FkIGFsbCBvZiB0aGUgdXNlcidzIGRhdGFcbiAgICAvLyBjYWxsIHRoaXMucHJvcHMuZ2V0VXNlckVudHJpZXNcbiAgfVxuICAvLyBhZGRzIGFsYnVtIHRvIHRoZSBkYXRhYmFzZVxuICBhZGQgKGFsYnVtKSB7XG5cbiAgfVxuICAvLyBjYWxscyBpVHVuZXMgc2VhcmNoIG1ldGhvZCBvbiB3aW5kb3cgb2JqZWN0XG4gIHNlYXJjaCAoc3RyaW5nKSB7XG4gICAgLy8gY2FsbHMgc2VhcmNoaVR1bmVzIGFuZCBzZXRzIHN0YXRlIG9mIHNlYXJjaFJlc3VsdHNcbiAgICB0aGlzLnByb3BzLnNlYXJjaGlUdW5lcyhzdHJpbmcsIChhbGJ1bXMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hSZXN1bHRzOiBhbGJ1bXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8vIHJlbmRlcnMgdGhlIGFwcCB0byB0aGUgRE9NXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RW50cnlMaXN0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=
>>>>>>> Rebase commit
