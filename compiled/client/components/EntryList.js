"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntryList = function (_React$Component) {
  _inherits(EntryList, _React$Component);

  function EntryList(props) {
    _classCallCheck(this, EntryList);

    return _possibleConstructorReturn(this, (EntryList.__proto__ || Object.getPrototypeOf(EntryList)).call(this, props));
  }

  _createClass(EntryList, [{
    key: "render",
    value: function render() {
<<<<<<< HEAD
      return React.createElement(
=======
      React.createElement(
>>>>>>> Rebase commit
        "table",
        null,
        React.createElement(
          "thead",
          null,
          "User's Listening Journal"
        ),
        "// use map to iterate over albums sent via props // render with Entry component"
      );
    }
  }]);

  return EntryList;
}(React.Component);

;
<<<<<<< HEAD

window.EntryList = EntryList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0VudHJ5TGlzdC5qc3giXSwibmFtZXMiOlsiRW50cnlMaXN0IiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRW5COzs7OzZCQUVTO0FBQ1IsYUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUFBLE9BREE7QUFPRDs7OztFQWJxQkMsTUFBTUMsUzs7QUFjN0I7O0FBRURDLE9BQU9KLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkVudHJ5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVudHJ5TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcylcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8dGFibGU+XG4gICAgICA8dGhlYWQ+VXNlcidzIExpc3RlbmluZyBKb3VybmFsPC90aGVhZD5cbiAgICAgIC8vIHVzZSBtYXAgdG8gaXRlcmF0ZSBvdmVyIGFsYnVtcyBzZW50IHZpYSBwcm9wc1xuICAgICAgICAvLyByZW5kZXIgd2l0aCBFbnRyeSBjb21wb25lbnRcbiAgICA8L3RhYmxlPlxuICApXG4gIH1cbn07XG5cbndpbmRvdy5FbnRyeUxpc3QgPSBFbnRyeUxpc3Q7XG4iXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0VudHJ5TGlzdC5qc3giXSwibmFtZXMiOlsiRW50cnlMaXN0IiwicHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLGlIQUNYQSxLQURXO0FBRW5COzs7OzZCQUVTO0FBQ1I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFBQTtBQUtEOzs7O0VBWHFCQyxNQUFNQyxTOztBQVk3QiIsImZpbGUiOiJFbnRyeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbnRyeUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIDx0YWJsZT5cbiAgICAgIDx0aGVhZD5Vc2VyJ3MgTGlzdGVuaW5nIEpvdXJuYWw8L3RoZWFkPlxuICAgICAgLy8gdXNlIG1hcCB0byBpdGVyYXRlIG92ZXIgYWxidW1zIHNlbnQgdmlhIHByb3BzXG4gICAgICAgIC8vIHJlbmRlciB3aXRoIEVudHJ5IGNvbXBvbmVudFxuICAgIDwvdGFibGU+XG4gIH1cbn07XG4iXX0=
>>>>>>> Rebase commit
