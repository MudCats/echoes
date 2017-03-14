'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
	_inherits(SearchBar, _React$Component);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

		_this.state = { term: '' };
		_this.onInputChange = _this.onInputChange.bind(_this);

		return _this;
	}

	_createClass(SearchBar, [{
		key: 'onInputChange',
		value: function onInputChange(term) {
			this.setState({ term: term });
			var query = this.state.term.split(' ').join('&20');
			var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=5';

			console.log(searchUrl);

			$.ajax({
				url: searchUrl,
				data: {
					format: 'json'
				},
				type: 'GET',
				dataType: 'jsonp',
				success: function success(data) {
					console.log(data);
				},
				error: function error(_error) {
					console.log(_error);
					return;
				}

			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				{ className: 'SearchBar' },
				React.createElement('input', { type: 'text',
					value: this.state.term,
					onChange: function onChange(event) {
						return _this2.onInputChange(event.target.value);
					}
				})
			);
		}
	}]);

	return SearchBar;
}(React.Component);

;

window.SearchBar = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzdGF0ZSIsInRlcm0iLCJvbklucHV0Q2hhbmdlIiwiYmluZCIsInNldFN0YXRlIiwicXVlcnkiLCJzcGxpdCIsImpvaW4iLCJzZWFyY2hVcmwiLCJjb25zb2xlIiwibG9nIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwiZm9ybWF0IiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUVMLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFFBQUtDLEtBQUwsR0FBYSxFQUFDQyxNQUFNLEVBQVAsRUFBYjtBQUNBLFFBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7O0FBSGlCO0FBS2pCOzs7O2dDQUVhRixJLEVBQUs7QUFDbEIsUUFBS0csUUFBTCxDQUFjLEVBQUNILFVBQUQsRUFBZDtBQUNBLE9BQUlJLFFBQVEsS0FBS0wsS0FBTCxDQUFXQyxJQUFYLENBQWdCSyxLQUFoQixDQUFzQixHQUF0QixFQUEyQkMsSUFBM0IsQ0FBZ0MsS0FBaEMsQ0FBWjtBQUNBLE9BQUlDLFlBQVksNENBQTRDSCxLQUE1QyxHQUFvRCx1QkFBcEU7O0FBRUFJLFdBQVFDLEdBQVIsQ0FBWUYsU0FBWjs7QUFFQUcsS0FBRUMsSUFBRixDQUFPO0FBQ05DLFNBQUtMLFNBREM7QUFFTk0sVUFBTztBQUNOQyxhQUFRO0FBREYsS0FGRDtBQUtOQyxVQUFNLEtBTEE7QUFNTkMsY0FBVSxPQU5KO0FBT05DLGFBQVMsaUJBQUNKLElBQUQsRUFBVTtBQUNsQkwsYUFBUUMsR0FBUixDQUFZSSxJQUFaO0FBQ0EsS0FUSztBQVVOSyxXQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNqQlYsYUFBUUMsR0FBUixDQUFZUyxNQUFaO0FBQ0E7QUFDQTs7QUFiSyxJQUFQO0FBaUJBOzs7MkJBRVE7QUFBQTs7QUFDTixVQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsV0FBZjtBQUNDLG1DQUFPLE1BQUssTUFBWjtBQUNJLFlBQU8sS0FBS25CLEtBQUwsQ0FBV0MsSUFEdEI7QUFFSSxlQUFVO0FBQUEsYUFBUyxPQUFLQyxhQUFMLENBQW1Ca0IsTUFBTUMsTUFBTixDQUFhQyxLQUFoQyxDQUFUO0FBQUE7QUFGZDtBQURELElBREY7QUFTRDs7OztFQTdDcUJDLE1BQU1DLFM7O0FBOEM3Qjs7QUFFREMsT0FBTzNCLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge3Rlcm06ICcnfTtcblx0XHR0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcblxuXHR9XG5cblx0b25JbnB1dENoYW5nZSh0ZXJtKXtcblx0XHR0aGlzLnNldFN0YXRlKHt0ZXJtfSk7XG5cdFx0dmFyIHF1ZXJ5ID0gdGhpcy5zdGF0ZS50ZXJtLnNwbGl0KCcgJykuam9pbignJjIwJyk7XG5cdFx0dmFyIHNlYXJjaFVybCA9ICdodHRwczovL2l0dW5lcy5hcHBsZS5jb20vc2VhcmNoP3Rlcm09PyQnICsgcXVlcnkgKyAnJmVudGl0eT1hbGJ1bSZsaW1pdD01JztcblxuXHRcdGNvbnNvbGUubG9nKHNlYXJjaFVybCk7XG5cblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiBzZWFyY2hVcmwsXG5cdFx0XHRkYXRhIDoge1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJ1xuXHRcdFx0fSxcblx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29ucCcsXG5cdFx0XHRzdWNjZXNzOiAoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0fSlcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlYXJjaEJhclwiPlxuICAgICAgXHQ8aW5wdXQgdHlwZT0ndGV4dCdcbiAgICAgIFx0XHQgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXJtfVxuICAgICAgXHRcdCAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLm9uSW5wdXRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgIFx0Lz5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbndpbmRvdy5TZWFyY2hCYXIgPSBTZWFyY2hCYXI7XG4iXX0=