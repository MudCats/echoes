"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Searches iTunes
var SearchBar = function (_React$Component) {
	_inherits(SearchBar, _React$Component);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));
	}

	_createClass(SearchBar, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement("input", { type: "text", className: "search-bar form-group", placeholder: "Search for an album...",
				onKeyUp: function onKeyUp(event) {
					return _this2.props.search(event.target.value);
				}
			});
		}
	}]);

	return SearchBar;
}(React.Component);

window.SearchBar = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicHJvcHMiLCJzZWFyY2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxTOzs7QUFFTCxvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLCtHQUNYQSxLQURXO0FBR2pCOzs7OzJCQUVPO0FBQUE7O0FBQ1AsVUFDQywrQkFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSx1QkFBN0IsRUFBcUQsYUFBWSx3QkFBakU7QUFDUSxhQUFTO0FBQUEsWUFBUyxPQUFLQSxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLE1BQU1DLE1BQU4sQ0FBYUMsS0FBL0IsQ0FBVDtBQUFBO0FBRGpCLEtBREQ7QUFLQTs7OztFQWJzQkMsTUFBTUMsUzs7QUFnQjlCQyxPQUFPUixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJTZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZWFyY2hlcyBpVHVuZXNcbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0tZ3JvdXBcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYW4gYWxidW0uLi5cIlxuICAgICAgXHRcdCAgIG9uS2V5VXA9e2V2ZW50ID0+IHRoaXMucHJvcHMuc2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICBcdFx0Lz5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LlNlYXJjaEJhciA9IFNlYXJjaEJhcjtcbiJdfQ==