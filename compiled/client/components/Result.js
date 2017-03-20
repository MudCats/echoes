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
						return _this2.props.setSelected(_this2.props.album);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Jlc3VsdC5qc3giXSwibmFtZXMiOlsiUmVzdWx0IiwicHJvcHMiLCJzZXRTZWxlY3RlZCIsImFsYnVtIiwiYXJ0d29ya1VybDEwMCIsImFydGlzdE5hbWUiLCJjb2xsZWN0aW9uTmFtZSIsInJlbGVhc2VEYXRlIiwic3Vic3RyaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0wsaUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx5R0FDWEEsS0FEVztBQUVqQjs7OzsyQkFFUztBQUFBOztBQUNULFVBRUE7QUFBQTtBQUFBLE1BQUssU0FBUztBQUFBLGFBQU0sT0FBS0EsS0FBTCxDQUFXQyxXQUFYLENBQXVCLE9BQUtELEtBQUwsQ0FBV0UsS0FBbEMsQ0FBTjtBQUFBLE1BQWQsRUFBOEQsV0FBVSxlQUF4RTtBQUNDLGlDQUFLLEtBQUssS0FBS0YsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxhQUEzQixHQUREO0FBRUM7QUFBQTtBQUFBO0FBQU0sVUFBS0gsS0FBTCxDQUFXRSxLQUFYLENBQWlCRTtBQUF2QixLQUZEO0FBR0M7QUFBQTtBQUFBO0FBQU0sVUFBS0osS0FBTCxDQUFXRSxLQUFYLENBQWlCRztBQUF2QixLQUhEO0FBSUM7QUFBQTtBQUFBO0FBQU0sVUFBS0wsS0FBTCxDQUFXRSxLQUFYLENBQWlCSSxXQUFqQixDQUE2QkMsU0FBN0IsQ0FBdUMsQ0FBdkMsRUFBMEMsQ0FBMUM7QUFBTjtBQUpELElBRkE7QUFVQTs7OztFQWhCbUJDLE1BQU1DLFM7O0FBbUIzQkMsT0FBT1gsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiUmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblxuXHRcdDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRTZWxlY3RlZCh0aGlzLnByb3BzLmFsYnVtKX0gY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdFwiPlxuXHRcdFx0PGltZyBzcmM9e3RoaXMucHJvcHMuYWxidW0uYXJ0d29ya1VybDEwMH0vPlxuXHRcdFx0PGRpdj57dGhpcy5wcm9wcy5hbGJ1bS5hcnRpc3ROYW1lfTwvZGl2PlxuXHRcdFx0PGRpdj57dGhpcy5wcm9wcy5hbGJ1bS5jb2xsZWN0aW9uTmFtZX08L2Rpdj5cblx0XHRcdDxkaXY+e3RoaXMucHJvcHMuYWxidW0ucmVsZWFzZURhdGUuc3Vic3RyaW5nKDAsIDQpfTwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5SZXN1bHQgPSBSZXN1bHQ7XG4iXX0=