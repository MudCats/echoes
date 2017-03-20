'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateBox = function (_React$Component) {
  _inherits(UpdateBox, _React$Component);

  function UpdateBox(props) {
    _classCallCheck(this, UpdateBox);

    var _this = _possibleConstructorReturn(this, (UpdateBox.__proto__ || Object.getPrototypeOf(UpdateBox)).call(this, props));

    _this.state = {
      modalActive: false,
      rating: '',
      impression: ''
    };
    return _this;
  }

  //show updateBox


  _createClass(UpdateBox, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalActive: true });
    }

    //hide updateBox

  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalActive: false });
    }

    // handles all form value changes

  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var target = e.target;
      var value = target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }

    //handles submiting form

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateUserEntries(this.props.impressionId, this.state.rating, this.state.impression, this.props.getUserEntries);
      this.closeModal();
    }

    // handles deleting whole entry from the database

  }, {
    key: 'handleDelete',
    value: function handleDelete(e) {
      e.preventDefault();
      this.props.deleteUserEntries(this.props.impressionId, this.props.date, this.props.getUserEntries);
      this.closeModal();
    }
  }, {
    key: 'render',
    value: function render() {
      return (
        // td
        React.createElement(
          'td',
          { className: 'col-md-3' },
          !this.state.modalActive && React.createElement(
            'div',
            { className: 'btn-group', role: 'group' },
            React.createElement(
              'a',
              { onClick: this.openModal.bind(this) },
              React.createElement(
                'button',
                { className: 'update btn btn-default' },
                React.createElement('span', { className: 'glyphicon glyphicon-pencil' })
              )
            ),
            React.createElement(
              'a',
              { onClick: this.handleDelete.bind(this) },
              React.createElement(
                'button',
                { className: 'remove btn btn-default' },
                React.createElement('span', { className: 'glyphicon glyphicon-remove-circle' })
              )
            )
          ),
          this.state.modalActive && React.createElement(
            'div',
            { className: 'update' },
            React.createElement('span', { className: 'close glyphicon glyphicon-remove', onClick: this.closeModal.bind(this) }),
            React.createElement(
              'form',
              { id: 'update', onSubmit: this.handleSubmit.bind(this) },
              React.createElement('textarea', { className: 'form-control', id: 'impression', name: 'impression',
                cols: '25',
                rows: '4',
                value: this.state.impression,
                onChange: this.handleInputChange.bind(this) }),
              React.createElement('br', null),
              React.createElement(
                'div',
                { className: 'input-group' },
                React.createElement(
                  'select',
                  { className: 'form-control', name: 'rating', id: 'rating', value: this.state.rating, onChange: this.handleInputChange.bind(this) },
                  React.createElement(
                    'option',
                    { value: null },
                    'Rating'
                  ),
                  React.createElement(
                    'option',
                    { value: 1 },
                    '1'
                  ),
                  React.createElement(
                    'option',
                    { value: 2 },
                    '2'
                  ),
                  React.createElement(
                    'option',
                    { value: 3 },
                    '3'
                  ),
                  React.createElement(
                    'option',
                    { value: 4 },
                    '4'
                  ),
                  React.createElement(
                    'option',
                    { value: 5 },
                    '5'
                  ),
                  React.createElement(
                    'option',
                    { value: 6 },
                    '6'
                  ),
                  React.createElement(
                    'option',
                    { value: 7 },
                    '7'
                  ),
                  React.createElement(
                    'option',
                    { value: 8 },
                    '8'
                  ),
                  React.createElement(
                    'option',
                    { value: 9 },
                    '9'
                  ),
                  React.createElement(
                    'option',
                    { value: 10 },
                    '10'
                  )
                ),
                React.createElement(
                  'span',
                  { className: 'input-group-btn' },
                  React.createElement('input', { className: 'btn btn-default', type: 'submit', id: 'submit', name: 'button', value: 'Save' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return UpdateBox;
}(React.Component);

window.UpdateBox = UpdateBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1VwZGF0ZUJveC5qc3giXSwibmFtZXMiOlsiVXBkYXRlQm94IiwicHJvcHMiLCJzdGF0ZSIsIm1vZGFsQWN0aXZlIiwicmF0aW5nIiwiaW1wcmVzc2lvbiIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlVXNlckVudHJpZXMiLCJpbXByZXNzaW9uSWQiLCJnZXRVc2VyRW50cmllcyIsImNsb3NlTW9kYWwiLCJkZWxldGVVc2VyRW50cmllcyIsImRhdGUiLCJvcGVuTW9kYWwiLCJiaW5kIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsc0hBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBWSxLQUREO0FBRVhDLGNBQVEsRUFGRztBQUdYQyxrQkFBWTtBQUhELEtBQWI7QUFGa0I7QUFPbkI7O0FBRUQ7Ozs7O2dDQUNhO0FBQ1gsV0FBS0MsUUFBTCxDQUFjLEVBQUVILGFBQVksSUFBZCxFQUFkO0FBQ0Q7O0FBRUQ7Ozs7aUNBQ2M7QUFDWixXQUFLRyxRQUFMLENBQWMsRUFBQ0gsYUFBWSxLQUFiLEVBQWQ7QUFDRDs7QUFFRDs7OztzQ0FDa0JJLEMsRUFBRztBQUNuQixVQUFNQyxTQUFTRCxFQUFFQyxNQUFqQjtBQUNBLFVBQU1DLFFBQVFELE9BQU9DLEtBQXJCO0FBQ0EsVUFBTUMsT0FBT0YsT0FBT0UsSUFBcEI7O0FBRUEsV0FBS0osUUFBTCxxQkFDR0ksSUFESCxFQUNVRCxLQURWO0FBR0Q7O0FBRUQ7Ozs7aUNBQ2NGLEMsRUFBRztBQUNmQSxRQUFFSSxjQUFGO0FBQ0EsV0FBS1YsS0FBTCxDQUFX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QUFBLG1CQVZGO0FBV0U7QUFBQTtBQUFBLHNCQUFRLE9BQU8sRUFBZjtBQUFBO0FBQUE7QUFYRixpQkFERjtBQWNFO0FBQUE7QUFBQSxvQkFBTSxXQUFVLGlCQUFoQjtBQUNFLGlEQUFPLFdBQVUsaUJBQWpCLEVBQW1DLE1BQUssUUFBeEMsRUFBaUQsSUFBRyxRQUFwRCxFQUE2RCxNQUFLLFFBQWxFLEVBQTJFLE9BQU0sTUFBakY7QUFERjtBQWRGO0FBUEY7QUFGRjtBQXJCSjtBQUZGO0FBdUREOzs7O0VBdEdtQkksTUFBTUMsUzs7QUF5RzlCQyxPQUFPekIsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiVXBkYXRlQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVXBkYXRlQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbEFjdGl2ZTpmYWxzZSxcbiAgICAgIHJhdGluZzogJycsXG4gICAgICBpbXByZXNzaW9uOiAnJ1xuICAgIH07XG4gIH1cblxuICAvL3Nob3cgdXBkYXRlQm94XG4gIG9wZW5Nb2RhbCAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsQWN0aXZlOnRydWV9KVxuICB9XG5cbiAgLy9oaWRlIHVwZGF0ZUJveFxuICBjbG9zZU1vZGFsICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHttb2RhbEFjdGl2ZTpmYWxzZX0pXG4gIH1cblxuICAvLyBoYW5kbGVzIGFsbCBmb3JtIHZhbHVlIGNoYW5nZXNcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgLy9oYW5kbGVzIHN1Ym1pdGluZyBmb3JtXG4gIGhhbmRsZVN1Ym1pdCAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXJFbnRyaWVzKHRoaXMucHJvcHMuaW1wcmVzc2lvbklkLCB0aGlzLnN0YXRlLnJhdGluZywgdGhpcy5zdGF0ZS5pbXByZXNzaW9uLCB0aGlzLnByb3BzLmdldFVzZXJFbnRyaWVzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIC8vIGhhbmRsZXMgZGVsZXRpbmcgd2hvbGUgZW50cnkgZnJvbSB0aGUgZGF0YWJhc2VcbiAgaGFuZGxlRGVsZXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVVc2VyRW50cmllcyh0aGlzLnByb3BzLmltcHJlc3Npb25JZCwgdGhpcy5wcm9wcy5kYXRlLCB0aGlzLnByb3BzLmdldFVzZXJFbnRyaWVzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIHRkXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9J2NvbC1tZC0zJz5cbiAgICAgICAgICB7IXRoaXMuc3RhdGUubW9kYWxBY3RpdmUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bi1ncm91cCcgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIHsvKiB1cGRhdGUgYnV0dG9uIC0tIGRvIG5vdCByZW1vdmUgYSB0YWdzLlxuICAgICAgICAgICAgICAgIFRoZXkgYXJlIG5lY2Vzc2FyeSB0byBtYWludGFpbiB3b3JraW5nIGJ1dHRvbnMgd2hpbGUga2VlcGluZyBib290c3RyYXAgc3R5bGluZyAqL31cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3VwZGF0ZSBidG4gYnRuLWRlZmF1bHQnPlxuICAgICAgICAgICAgICAgICAgey8qIHBlbmNpbCBpY29uICovfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbCc+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKiAgZGVsZXRlIGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3JlbW92ZSBidG4gYnRuLWRlZmF1bHQnPlxuICAgICAgICAgICAgICAgICAgey8qIHJlbW92ZSBpY29uICovfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZS1jaXJjbGUnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RhbEFjdGl2ZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXBkYXRlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjbG9zZSBnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZScgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcyl9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGZvcm0gaWQ9J3VwZGF0ZScgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgaWQ9J2ltcHJlc3Npb24nIG5hbWU9J2ltcHJlc3Npb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPScyNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9JzQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbXByZXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgbmFtZT0ncmF0aW5nJyBpZD0ncmF0aW5nJyB2YWx1ZT17dGhpcy5zdGF0ZS5yYXRpbmd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtudWxsfT5SYXRpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MX0+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyfT4yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezN9PjM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17NH0+NDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs1fT41PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezZ9PjY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17N30+Nzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs4fT44PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezl9Pjk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTB9PjEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtYnRuJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0JyB0eXBlPSdzdWJtaXQnIGlkPVwic3VibWl0XCIgbmFtZT0nYnV0dG9uJyB2YWx1ZT0nU2F2ZSc+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgIDwvdGQ+XG4gICAgICApXG4gICAgfVxufVxuXG53aW5kb3cuVXBkYXRlQm94ID0gVXBkYXRlQm94O1xuIl19