"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Component generatees each search result entry
var ResultsList = function (_React$Component) {
	_inherits(ResultsList, _React$Component);

	function ResultsList(props) {
		_classCallCheck(this, ResultsList);

		return _possibleConstructorReturn(this, (ResultsList.__proto__ || Object.getPrototypeOf(ResultsList)).call(this, props));
	}

	_createClass(ResultsList, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				this.props.albums.map(function (album) {
					return React.createElement(Result, { addNewEntry: _this2.props.addNewEntry,
						setSelected: _this2.props.setSelected,
						key: album.collectionId,
						album: album });
				})
			);
		}
	}]);

	return ResultsList;
}(React.Component);

window.ResultsList = ResultsList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Jlc3VsdHNMaXN0LmpzeCJdLCJuYW1lcyI6WyJSZXN1bHRzTGlzdCIsInByb3BzIiwiYWxidW1zIiwibWFwIiwiYWxidW0iLCJhZGROZXdFbnRyeSIsInNldFNlbGVjdGVkIiwiY29sbGVjdGlvbklkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxXOzs7QUFDTCxzQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXO0FBRWpCOzs7OzJCQUVTO0FBQUE7O0FBQ1QsVUFDQztBQUFBO0FBQUE7QUFDRSxTQUFLQSxLQUFMLENBQVdDLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBVztBQUNqQyxZQUNDLG9CQUFDLE1BQUQsSUFBUSxhQUFhLE9BQUtILEtBQUwsQ0FBV0ksV0FBaEM7QUFDTyxtQkFBYSxPQUFLSixLQUFMLENBQVdLLFdBRC9CO0FBRUksV0FBS0YsTUFBTUcsWUFGZjtBQUdJLGFBQU9ILEtBSFgsR0FERDtBQUtHLEtBTkg7QUFERixJQUREO0FBYUE7Ozs7RUFuQndCSSxNQUFNQyxTOztBQXVCaENDLE9BQU9WLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlJlc3VsdHNMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29tcG9uZW50IGdlbmVyYXRlZXMgZWFjaCBzZWFyY2ggcmVzdWx0IGVudHJ5XG5jbGFzcyBSZXN1bHRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5hbGJ1bXMubWFwKChhbGJ1bSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8UmVzdWx0IGFkZE5ld0VudHJ5PXt0aGlzLnByb3BzLmFkZE5ld0VudHJ5fVxuXHRcdFx0XHRcdFx0XHQgICAgICBzZXRTZWxlY3RlZD17dGhpcy5wcm9wcy5zZXRTZWxlY3RlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXthbGJ1bS5jb2xsZWN0aW9uSWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsYnVtPXthbGJ1bX0vPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxufVxuXG53aW5kb3cuUmVzdWx0c0xpc3QgPSBSZXN1bHRzTGlzdDtcbiJdfQ==