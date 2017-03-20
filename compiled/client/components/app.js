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
      searchResults: [],
      currentUser: ''
    };
    return _this;
  }
  // when the component loads successfully


  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // load all of the user's data
      this.getUserEntries();
    }
    // gets all entries from a user

  }, {
    key: 'getUserEntries',
    value: function getUserEntries() {
      var _this2 = this;

      $.ajax({
        url: '/querydb',
        type: 'GET',
        success: function success(response) {
          // sets state of all entries
          // sets current user name
          if (response.length) {
            _this2.setState({
              allEntries: response,
              currentUser: response[0].user
            });
          }
        },
        error: function error(_error) {
          console.log(_error);
          throw _error;
        }
      });
    }
  }, {
    key: 'greetUser',

    // generates greeting in banner
    value: function greetUser() {
      // if current user is identified
      if (this.state.currentUser) {
        // greet them by name
        return 'Hello, ' + this.state.currentUser + '!';
      } else {
        // new users are greetedwith Hello
        return 'Hello!';
      }
    }
    // deletes a listening instance from the db

  }, {
    key: 'deleteUserEntries',
    value: function deleteUserEntries(id, date, callback) {
      $.ajax({
        url: '/querydb/delete',
        type: 'POST',
        data: {
          impressionId: id,
          date: date
        },
        success: function success(response) {
          console.log(response);
          callback();
        },
        error: function error(_error2) {
          console.log(_error2);
          throw _error2;
        }
      });
    }
    // updates a user entry

  }, {
    key: 'updateUserEntries',
    value: function updateUserEntries(id, rating, impression, callback) {
      $.ajax({
        url: '/querydb/update',
        type: 'POST',
        data: {
          id: id,
          rating: rating,
          impression: impression
        },
        success: function success(response) {
          callback();
        },
        error: function error(_error3) {
          console.log(_error3);
          throw _error3;
        }
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
          { className: 'container-fluid app' },
          React.createElement(
            'header',
            { className: 'navbar' },
            React.createElement(
              'div',
              null,
              React.createElement(
                'h2',
                { className: 'greeting' },
                this.greetUser()
              )
            ),
            React.createElement(
              'a',
              { href: '/signout', className: 'navbar-right signout' },
              React.createElement(
                'button',
                { className: 'btn btn-default landing' },
                React.createElement(
                  'span',
                  null,
                  'Sign Out'
                )
              )
            ),
            React.createElement('img', { className: 'navbar-center header logo', src: 'styles/logo.svg' })
          ),
          React.createElement(
            'div',
            { className: 'col-md-2 search' },
            React.createElement(Search, { getUserEntries: this.getUserEntries.bind(this) })
          ),
          React.createElement(
            'div',
            { className: 'col-md-10' },
            React.createElement(
              'table',
              { className: 'table-responsive table' },
              React.createElement(EntryList, { allEntries: this.state.allEntries,
                updateUserEntries: this.updateUserEntries.bind(this),
                getUserEntries: this.getUserEntries.bind(this),
                deleteUserEntries: this.deleteUserEntries.bind(this) })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZXdpbmdFbnRyeSIsImFsbEVudHJpZXMiLCJzZWFyY2hSZXN1bHRzIiwiY3VycmVudFVzZXIiLCJnZXRVc2VyRW50cmllcyIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImxlbmd0aCIsInNldFN0YXRlIiwidXNlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0ZSIsImNhbGxiYWNrIiwiZGF0YSIsImltcHJlc3Npb25JZCIsInJhdGluZyIsImltcHJlc3Npb24iLCJncmVldFVzZXIiLCJiaW5kIiwidXBkYXRlVXNlckVudHJpZXMiLCJkZWxldGVVc2VyRW50cmllcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFFbEI7QUFGa0IsMEdBQ1hBLEtBRFc7O0FBR2xCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxFQURIO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMscUJBQWUsRUFISjtBQUlYQyxtQkFBYTtBQUpGLEtBQWI7QUFIa0I7QUFTbkI7QUFDRDs7Ozs7eUNBQ3NCO0FBQ3BCO0FBQ0EsV0FBS0MsY0FBTDtBQUNEO0FBQ0Q7Ozs7cUNBQ2tCO0FBQUE7O0FBQ2hCQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxVQURBO0FBRUxDLGNBQU0sS0FGRDtBQUdMQyxpQkFBUyxpQkFBQ0MsUUFBRCxFQUFjO0FBQ3JCO0FBQ0E7QUFDQSxjQUFJQSxTQUFTQyxNQUFiLEVBQXFCO0FBQ25CLG1CQUFLQyxRQUFMLENBQWM7QUFDWlgsMEJBQVlTLFFBREE7QUFFWlAsMkJBQWFPLFNBQVMsQ0FBVCxFQUFZRztBQUZiLGFBQWQ7QUFJRDtBQUNGLFNBWkk7QUFhTEMsZUFBTyxlQUFVQSxNQUFWLEVBQWlCO0FBQ3RCQyxrQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsZ0JBQU1BLE1BQU47QUFDRDtBQWhCSSxPQUFQO0FBa0JEOzs7O0FBQ0Q7Z0NBQ2E7QUFDWDtBQUNBLFVBQUksS0FBS2YsS0FBTCxDQUFXSSxXQUFmLEVBQTRCO0FBQzFCO0FBQ0EsMkJBQWlCLEtBQUtKLEtBQUwsQ0FBV0ksV0FBNUI7QUFDRCxPQUhELE1BR087QUFDTDtBQUNBO0FBQ0Q7QUFDRjtBQUNEOzs7O3NDQUNtQmMsRSxFQUFJQyxJLEVBQU1DLFEsRUFBVTtBQUNyQ2QsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUksaUJBREM7QUFFTEMsY0FBSyxNQUZBO0FBR0xZLGNBQU07QUFDSkMsd0JBQWNKLEVBRFY7QUFFSkMsZ0JBQU1BO0FBRkYsU0FIRDtBQU9MVCxpQkFBUyxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQkssa0JBQVFDLEdBQVIsQ0FBWU4sUUFBWjtBQUNBUztBQUNELFNBVkk7QUFXTEwsZUFBTyxlQUFVQSxPQUFWLEVBQWlCO0FBQ3RCQyxrQkFBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0EsZ0JBQU1BLE9BQU47QUFDRDtBQWRJLE9BQVA7QUFnQkQ7QUFDRDs7OztzQ0FDbUJHLEUsRUFBSUssTSxFQUFRQyxVLEVBQVlKLFEsRUFBVTtBQUNuRGQsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUksaUJBREM7QUFFTEMsY0FBSyxNQUZBO0FBR0xZLGNBQUs7QUFDSEgsY0FBSUEsRUFERDtBQUVISyxrQkFBUUEsTUFGTDtBQUdIQyxzQkFBWUE7QUFIVCxTQUhBO0FBUUxkLGlCQUFTLGlCQUFVQyxRQUFWLEVBQW9CO0FBQzFCUztBQUNGLFNBVkk7QUFXTEwsZUFBTyxlQUFVQSxPQUFWLEVBQWlCO0FBQ3RCQyxrQkFBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0EsZ0JBQU1BLE9BQU47QUFDRDtBQWRJLE9BQVA7QUFnQkQ7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBUSxXQUFVLFFBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBLGtCQUFJLFdBQVUsVUFBZDtBQUEwQixxQkFBS1UsU0FBTDtBQUExQjtBQUFMLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxVQUFSLEVBQW1CLFdBQVUsc0JBQTdCO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLFdBQVUseUJBQWxCO0FBQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFERixhQUZGO0FBS0UseUNBQUssV0FBVSwyQkFBZixFQUEyQyxLQUFJLGlCQUEvQztBQUxGLFdBREY7QUFRRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGlCQUFoQjtBQUNFLGdDQUFDLE1BQUQsSUFBUSxnQkFBZ0IsS0FBS3BCLGNBQUwsQ0FBb0JxQixJQUFwQixDQUF5QixJQUF6QixDQUF4QjtBQURGLFdBUkY7QUFXRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSx3QkFBakI7QUFDRSxrQ0FBQyxTQUFELElBQVcsWUFBWSxLQUFLMUIsS0FBTCxDQUFXRSxVQUFsQztBQUNFLG1DQUFtQixLQUFLeUIsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBRHJCO0FBRUUsZ0NBQWdCLEtBQUtyQixjQUFMLENBQW9CcUIsSUFBcEIsQ0FBeUIsSUFBekIsQ0FGbEI7QUFHRSxtQ0FBbUIsS0FBS0UsaUJBQUwsQ0FBdUJGLElBQXZCLENBQTRCLElBQTVCLENBSHJCO0FBREY7QUFERjtBQVhGO0FBREYsT0FGRjtBQXlCRDs7OztFQWxIZUcsTUFBTUMsUzs7QUFxSHhCQyxPQUFPakMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgLy8gd2lsbCBob2xkIHN0YXRlIG9mIGFsbCBlbnRyaWVzIGluIGRhdGFiYXNlIGFuZCBjdXJyZW50IHNlYXJjaCB2YWx1ZXNcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlld2luZ0VudHJ5OiAnJyxcbiAgICAgIGFsbEVudHJpZXM6IFtdLFxuICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICBjdXJyZW50VXNlcjogJydcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiB0aGUgY29tcG9uZW50IGxvYWRzIHN1Y2Nlc3NmdWxseVxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIC8vIGxvYWQgYWxsIG9mIHRoZSB1c2VyJ3MgZGF0YVxuICAgIHRoaXMuZ2V0VXNlckVudHJpZXMoKTtcbiAgfVxuICAvLyBnZXRzIGFsbCBlbnRyaWVzIGZyb20gYSB1c2VyXG4gIGdldFVzZXJFbnRyaWVzICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3F1ZXJ5ZGInLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gc2V0cyBzdGF0ZSBvZiBhbGwgZW50cmllc1xuICAgICAgICAvLyBzZXRzIGN1cnJlbnQgdXNlciBuYW1lXG4gICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFsbEVudHJpZXM6IHJlc3BvbnNlLFxuICAgICAgICAgICAgY3VycmVudFVzZXI6IHJlc3BvbnNlWzBdLnVzZXJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0pXG4gIH07XG4gIC8vIGdlbmVyYXRlcyBncmVldGluZyBpbiBiYW5uZXJcbiAgZ3JlZXRVc2VyICgpIHtcbiAgICAvLyBpZiBjdXJyZW50IHVzZXIgaXMgaWRlbnRpZmllZFxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRVc2VyKSB7XG4gICAgICAvLyBncmVldCB0aGVtIGJ5IG5hbWVcbiAgICAgIHJldHVybiBgSGVsbG8sICR7dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn0hYFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBuZXcgdXNlcnMgYXJlIGdyZWV0ZWR3aXRoIEhlbGxvXG4gICAgICByZXR1cm4gYEhlbGxvIWBcbiAgICB9XG4gIH1cbiAgLy8gZGVsZXRlcyBhIGxpc3RlbmluZyBpbnN0YW5jZSBmcm9tIHRoZSBkYlxuICBkZWxldGVVc2VyRW50cmllcyAoaWQsIGRhdGUsIGNhbGxiYWNrKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDonL3F1ZXJ5ZGIvZGVsZXRlJyxcbiAgICAgIHR5cGU6J1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICBpbXByZXNzaW9uSWQ6IGlkLFxuICAgICAgICBkYXRlOiBkYXRlXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAvLyB1cGRhdGVzIGEgdXNlciBlbnRyeVxuICB1cGRhdGVVc2VyRW50cmllcyAoaWQsIHJhdGluZywgaW1wcmVzc2lvbiwgY2FsbGJhY2spIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOicvcXVlcnlkYi91cGRhdGUnLFxuICAgICAgdHlwZTonUE9TVCcsXG4gICAgICBkYXRhOntcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICByYXRpbmc6IHJhdGluZyxcbiAgICAgICAgaW1wcmVzc2lvbjogaW1wcmVzc2lvblxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIHJlbmRlcnMgdGhlIGFwcCB0byB0aGUgRE9NXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYXBwXCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgIDxkaXY+PGgyIGNsYXNzTmFtZT1cImdyZWV0aW5nXCI+e3RoaXMuZ3JlZXRVc2VyKCl9PC9oMj48L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvc2lnbm91dFwiIGNsYXNzTmFtZT0nbmF2YmFyLXJpZ2h0IHNpZ25vdXQnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBsYW5kaW5nXCI+PHNwYW4+U2lnbiBPdXQ8L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbmF2YmFyLWNlbnRlciBoZWFkZXIgbG9nbycgc3JjPVwic3R5bGVzL2xvZ28uc3ZnXCI+PC9pbWc+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiY29sLW1kLTIgc2VhcmNoXCI+XG4gICAgICAgICAgICA8U2VhcmNoIGdldFVzZXJFbnRyaWVzPXt0aGlzLmdldFVzZXJFbnRyaWVzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUgdGFibGVcIj5cbiAgICAgICAgICAgICAgPEVudHJ5TGlzdCBhbGxFbnRyaWVzPXt0aGlzLnN0YXRlLmFsbEVudHJpZXN9XG4gICAgICAgICAgICAgICAgdXBkYXRlVXNlckVudHJpZXM9e3RoaXMudXBkYXRlVXNlckVudHJpZXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBnZXRVc2VyRW50cmllcz17dGhpcy5nZXRVc2VyRW50cmllcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGRlbGV0ZVVzZXJFbnRyaWVzPXt0aGlzLmRlbGV0ZVVzZXJFbnRyaWVzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=