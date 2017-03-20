"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Result = function (_React$Component) {
	_inherits(Result, _React$Component);

	function Result(props) {
		_classCallCheck(this, Result);

		return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));
	}

	_createClass(Result, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				{ onClick: function onClick() {
						_this2.props.setSelected(_this2.props.album);$('#add-album-btn').toggle();
					}, className: "search-result" },
				React.createElement("img", { src: this.props.album.artworkUrl100 }),
				React.createElement(
					"div",
					null,
					this.props.album.artistName
				),
				React.createElement(
					"div",
					null,
					this.props.album.collectionName
				),
				React.createElement(
					"div",
					null,
					this.props.album.releaseDate.substring(0, 4)
				)
			);
		}
	}]);

	return Result;
}(React.Component);

window.Result = Result;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Jlc3VsdC5qc3giXSwibmFtZXMiOlsiUmVzdWx0IiwicHJvcHMiLCJzZXRTZWxlY3RlZCIsImFsYnVtIiwiJCIsInRvZ2dsZSIsImFydHdvcmtVcmwxMDAiLCJhcnRpc3ROYW1lIiwiY29sbGVjdGlvbk5hbWUiLCJyZWxlYXNlRGF0ZSIsInN1YnN0cmluZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNMLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7QUFFakI7Ozs7MkJBRVM7QUFBQTs7QUFDVCxVQUVBO0FBQUE7QUFBQSxNQUFLLFNBQVMsbUJBQU07QUFBQyxhQUFLQSxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsT0FBS0QsS0FBTCxDQUFXRSxLQUFsQyxFQUEwQ0MsRUFBRSxnQkFBRixFQUFvQkMsTUFBcEI7QUFBNkIsTUFBNUYsRUFBOEYsV0FBVSxlQUF4RztBQUNDLGlDQUFLLEtBQUssS0FBS0osS0FBTCxDQUFXRSxLQUFYLENBQWlCRyxhQUEzQixHQUREO0FBRUM7QUFBQTtBQUFBO0FBQU0sVUFBS0wsS0FBTCxDQUFXRSxLQUFYLENBQWlCSTtBQUF2QixLQUZEO0FBR0M7QUFBQTtBQUFBO0FBQU0sVUFBS04sS0FBTCxDQUFXRSxLQUFYLENBQWlCSztBQUF2QixLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQU0sVUFBS1AsS0FBTCxDQUFXRSxLQUFYLENBQWlCTSxXQUFqQixDQUE2QkMsU0FBN0IsQ0FBdUMsQ0FBdkMsRUFBMEMsQ0FBMUM7QUFBTjtBQUpELElBRkE7QUFVQTs7OztFQWhCbUJDLE1BQU1DLFM7O0FBbUIzQkMsT0FBT2IsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiUmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblxuXHRcdDxkaXYgb25DbGljaz17KCkgPT4ge3RoaXMucHJvcHMuc2V0U2VsZWN0ZWQodGhpcy5wcm9wcy5hbGJ1bSk7ICQoJyNhZGQtYWxidW0tYnRuJykudG9nZ2xlKCl9fSBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0XCI+XG5cdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5hcnR3b3JrVXJsMTAwfS8+XG5cdFx0XHQ8ZGl2Pnt0aGlzLnByb3BzLmFsYnVtLmFydGlzdE5hbWV9PC9kaXY+XG5cdFx0XHQ8ZGl2Pnt0aGlzLnByb3BzLmFsYnVtLmNvbGxlY3Rpb25OYW1lfTwvZGl2PlxuXHRcdFx0PGRpdj57dGhpcy5wcm9wcy5hbGJ1bS5yZWxlYXNlRGF0ZS5zdWJzdHJpbmcoMCwgNCl9PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LlJlc3VsdCA9IFJlc3VsdDtcbiJdfQ==