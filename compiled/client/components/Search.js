'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.state = {
			term: '',
			results: [],
			selectedListenDate: null
		};
		return _this;
	}
	// sets default date for calendar input field


	_createClass(Search, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			// generates current date
			var todayDate = new Date();
			// uses moment.js to format date
			var formattedDate = moment(todayDate).format('YYYY-MM-DD');
			// sets state when component mounts
			this.setState({
				selectedListenDate: formattedDate
			});
		}
		// displays only the clicked album

	}, {
		key: 'setSelected',
		value: function setSelected(album) {
			// date defaults to current date
			var date = $('input').val() || this.state.selectedListenDate;
			// sets state to display one album and sets state of listen date
			this.setState({
				results: [album],
				selectedListenDate: date
			});
		}
		// sends request to iTunes api

	}, {
		key: 'iTunesSearch',
		value: function iTunesSearch(term) {
			var _this2 = this;

			this.setState({ term: term });
			// used percent encoding for iTunes API search
			var query = this.state.term.split(' ').join('%20');
			// creates search URL with limit of four results
			var searchUrl = 'https://itunes.apple.com/search?term=?$' + query + '&entity=album&limit=4';

			$.ajax({
				url: searchUrl,
				data: {
					format: 'json'
				},
				type: 'GET',
				dataType: 'jsonp',
				success: function success(data) {
					console.log(data);
					// changes state of results, triggering view change
					_this2.setState({ results: data.results });
				},
				error: function error(_error) {
					console.log(_error);
					return;
				}
			});
		}

		// send selected album and listen date to db via post request

	}, {
		key: 'addNewEntry',
		value: function addNewEntry(album, date) {
			var _this3 = this;

			// send object with keys album and date
			var newEntry = { album: album, date: date.slice(0, 10) };
			// user can only submit one album
			if (this.state.results.length === 1) {
				$.ajax({
					url: '/querydb',
					type: 'POST',
					dataType: 'text',
					contentType: 'application/json',
					data: JSON.stringify(newEntry),
					success: function success(results) {
						// clears previously set state
						_this3.setState({
							term: '',
							results: [],
							selectedListenDate: null
						});
						// gets user entries from db and rerenders entry list
						_this3.props.getUserEntries();
						// clear the search bar
						$('.search-bar').val('');
					},
					error: function error(_error2) {
						console.log(_error2);
						return;
					}
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'search-container' },
					React.createElement(
						'h3',
						{ className: 'search-prompt' },
						'Add an album:'
					),
					React.createElement('input', { type: 'date', name: 'date', className: 'form-group search-bar' }),
					React.createElement('br', null),
					React.createElement(SearchBar, { search: _.debounce(this.iTunesSearch.bind(this), 300),
						className: 'search-bar' }),
					React.createElement(
						'a',
						{ onClick: function onClick() {
								_this4.addNewEntry(_this4.state.results[0], _this4.state.selectedListenDate);$('#add-album-btn').toggle();
							} },
						React.createElement(
							'button',
							{ type: 'button', className: 'btn btn-default', id: 'add-album-btn' },
							'Add an album'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'results-container' },
					React.createElement(ResultsList, { albums: this.state.results,
						addNewEntry: this.props.addNewEntry,
						setSelected: this.setSelected.bind(this),
						className: 'results-container' })
				)
			);
		}
	}]);

	return Search;
}(React.Component);

;

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInRlcm0iLCJyZXN1bHRzIiwic2VsZWN0ZWRMaXN0ZW5EYXRlIiwidG9kYXlEYXRlIiwiRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsImFsYnVtIiwiZGF0ZSIsIiQiLCJ2YWwiLCJxdWVyeSIsInNwbGl0Iiwiam9pbiIsInNlYXJjaFVybCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm5ld0VudHJ5Iiwic2xpY2UiLCJsZW5ndGgiLCJjb250ZW50VHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRVc2VyRW50cmllcyIsIl8iLCJkZWJvdW5jZSIsImlUdW5lc1NlYXJjaCIsImJpbmQiLCJhZGROZXdFbnRyeSIsInRvZ2dsZSIsInNldFNlbGVjdGVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBRUwsaUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFHakIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFNBQU0sRUFETTtBQUVaQyxZQUFTLEVBRkc7QUFHWkMsdUJBQW9CO0FBSFIsR0FBYjtBQUhpQjtBQVFqQjtBQUNBOzs7Ozt1Q0FDcUI7QUFDckI7QUFDQSxPQUFJQyxZQUFZLElBQUlDLElBQUosRUFBaEI7QUFDQTtBQUNBLE9BQUlDLGdCQUFnQkMsT0FBT0gsU0FBUCxFQUFrQkksTUFBbEIsQ0FBeUIsWUFBekIsQ0FBcEI7QUFDRTtBQUNGLFFBQUtDLFFBQUwsQ0FBYztBQUNiTix3QkFBb0JHO0FBRFAsSUFBZDtBQUdBO0FBQ0E7Ozs7OEJBQ1lJLEssRUFBTztBQUNuQjtBQUNBLE9BQUlDLE9BQU9DLEVBQUUsT0FBRixFQUFXQyxHQUFYLE1BQW9CLEtBQUtiLEtBQUwsQ0FBV0csa0JBQTFDO0FBQ0U7QUFDRixRQUFLTSxRQUFMLENBQWM7QUFDYlAsYUFBUyxDQUFDUSxLQUFELENBREk7QUFFYlAsd0JBQW9CUTtBQUZQLElBQWQ7QUFJQTtBQUNBOzs7OytCQUNhVixJLEVBQU07QUFBQTs7QUFDbkIsUUFBS1EsUUFBTCxDQUFjLEVBQUNSLFVBQUQsRUFBZDtBQUNBO0FBQ0EsT0FBSWEsUUFBUSxLQUFLZCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JjLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCQyxJQUEzQixDQUFnQyxLQUFoQyxDQUFaO0FBQ0E7QUFDQSxPQUFJQyxZQUFZLDRDQUE0Q0gsS0FBNUMsR0FBb0QsdUJBQXBFOztBQUVBRixLQUFFTSxJQUFGLENBQU87QUFDTkMsU0FBS0YsU0FEQztBQUVORyxVQUFPO0FBQ05aLGFBQVE7QUFERixLQUZEO0FBS05hLFVBQU0sS0FMQTtBQU1OQyxjQUFVLE9BTko7QUFPTkMsYUFBUyxpQkFBQ0gsSUFBRCxFQUFVO0FBQ2xCSSxhQUFRQyxHQUFSLENBQVlMLElBQVo7QUFDQTtBQUNBLFlBQUtYLFFBQUwsQ0FBYyxFQUFDUCxTQUFTa0IsS0FBS2xCLE9BQWYsRUFBZDtBQUNBLEtBWEs7QUFZTndCLFdBQU8sZUFBQ0EsTUFBRCxFQUFXO0FBQ2pCRixhQUFRQyxHQUFSLENBQVlDLE1BQVo7QUFDQTtBQUNBO0FBZkssSUFBUDtBQWlCQTs7QUFFRDs7Ozs4QkFDYWhCLEssRUFBT0MsSSxFQUFNO0FBQUE7O0FBQ3pCO0FBQ0EsT0FBSWdCLFdBQVcsRUFBQ2pCLE9BQU9BLEtBQVIsRUFBZUMsTUFBTUEsS0FBS2lCLEtBQUwsQ0FBVyxDQUFYLEVBQWEsRUFBYixDQUFyQixFQUFmO0FBQ0E7QUFDQSxPQUFJLEtBQUs1QixLQUFMLENBQVdFLE9BQVgsQ0FBbUIyQixNQUFuQixLQUE4QixDQUFsQyxFQUFxQztBQUNwQ2pCLE1BQUVNLElBQUYsQ0FBTztBQUNOQyxVQUFLLFVBREM7QUFFTkUsV0FBTSxNQUZBO0FBR05DLGVBQVUsTUFISjtBQUlOUSxrQkFBYSxrQkFKUDtBQUtOVixXQUFNVyxLQUFLQyxTQUFMLENBQWVMLFFBQWYsQ0FMQTtBQU1OSixjQUFTLGlCQUFDckIsT0FBRCxFQUFhO0FBQ3JCO0FBQ0EsYUFBS08sUUFBTCxDQUFjO0FBQ2JSLGFBQU0sRUFETztBQUViQyxnQkFBUyxFQUZJO0FBR2JDLDJCQUFvQjtBQUhQLE9BQWQ7QUFLSztBQUNMLGFBQUtKLEtBQUwsQ0FBV2tDLGNBQVg7QUFDQTtBQUNBckIsUUFBRSxhQUFGLEVBQWlCQyxHQUFqQixDQUFxQixFQUFyQjtBQUNBLE1BakJLO0FBa0JOYSxZQUFPLGVBQVVBLE9BQVYsRUFBaUI7QUFDdkJGLGNBQVFDLEdBQVIsQ0FBWUMsT0FBWjtBQUNBO0FBQ0E7QUFyQkssS0FBUDtBQXVCQTtBQUNEOzs7MkJBRVE7QUFBQTs7QUFHTixVQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsa0JBQWY7QUFDRjtBQUFBO0FBQUEsUUFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLE1BREU7QUFFRixvQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixXQUFVLHVCQUF6QyxHQUZFO0FBR0Ysb0NBSEU7QUFJQyx5QkFBQyxTQUFELElBQVcsUUFBUVEsRUFBRUMsUUFBRixDQUFXLEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQVgsRUFBeUMsR0FBekMsQ0FBbkI7QUFDTyxpQkFBVSxZQURqQixHQUpEO0FBTVk7QUFBQTtBQUFBLFFBQUcsU0FBUyxtQkFBTTtBQUFDLGVBQUtDLFdBQUwsQ0FBaUIsT0FBS3RDLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQixDQUFuQixDQUFqQixFQUF3QyxPQUFLRixLQUFMLENBQVdHLGtCQUFuRCxFQUF3RVMsRUFBRSxnQkFBRixFQUFvQjJCLE1BQXBCO0FBQTZCLFFBQXhIO0FBQ1A7QUFBQTtBQUFBLFNBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDLEVBQWtELElBQUcsZUFBckQ7QUFBQTtBQUFBO0FBRE87QUFOWixLQUREO0FBV0Y7QUFBQTtBQUFBLE9BQUssV0FBVSxtQkFBZjtBQUNDLHlCQUFDLFdBQUQsSUFBYSxRQUFRLEtBQUt2QyxLQUFMLENBQVdFLE9BQWhDO0FBQ0MsbUJBQWEsS0FBS0gsS0FBTCxDQUFXdUMsV0FEekI7QUFFQyxtQkFBYSxLQUFLRSxXQUFMLENBQWlCSCxJQUFqQixDQUFzQixJQUF0QixDQUZkO0FBR0MsaUJBQVUsbUJBSFg7QUFERDtBQVhFLElBREY7QUFzQkQ7Ozs7RUFwSGtCSSxNQUFNQyxTOztBQXFIMUI7O0FBRURDLE9BQU83QyxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGVybTogJycsXG5cdFx0XHRyZXN1bHRzOiBbXSxcblx0XHRcdHNlbGVjdGVkTGlzdGVuRGF0ZTogbnVsbFxuXHRcdH07XG5cdH1cbiAgLy8gc2V0cyBkZWZhdWx0IGRhdGUgZm9yIGNhbGVuZGFyIGlucHV0IGZpZWxkXG5cdGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG5cdFx0Ly8gZ2VuZXJhdGVzIGN1cnJlbnQgZGF0ZVxuXHRcdHZhciB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdC8vIHVzZXMgbW9tZW50LmpzIHRvIGZvcm1hdCBkYXRlXG5cdFx0dmFyIGZvcm1hdHRlZERhdGUgPSBtb21lbnQodG9kYXlEYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAvLyBzZXRzIHN0YXRlIHdoZW4gY29tcG9uZW50IG1vdW50c1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2VsZWN0ZWRMaXN0ZW5EYXRlOiBmb3JtYXR0ZWREYXRlXG5cdFx0fSk7XG5cdH1cbiAgLy8gZGlzcGxheXMgb25seSB0aGUgY2xpY2tlZCBhbGJ1bVxuXHRzZXRTZWxlY3RlZCAoYWxidW0pIHtcblx0XHQvLyBkYXRlIGRlZmF1bHRzIHRvIGN1cnJlbnQgZGF0ZVxuXHRcdHZhciBkYXRlID0gJCgnaW5wdXQnKS52YWwoKSB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkTGlzdGVuRGF0ZTtcbiAgICAvLyBzZXRzIHN0YXRlIHRvIGRpc3BsYXkgb25lIGFsYnVtIGFuZCBzZXRzIHN0YXRlIG9mIGxpc3RlbiBkYXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyZXN1bHRzOiBbYWxidW1dLFxuXHRcdFx0c2VsZWN0ZWRMaXN0ZW5EYXRlOiBkYXRlXG5cdFx0fSk7XG5cdH1cbiAgLy8gc2VuZHMgcmVxdWVzdCB0byBpVHVuZXMgYXBpXG5cdGlUdW5lc1NlYXJjaCAodGVybSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Rlcm19KTtcblx0XHQvLyB1c2VkIHBlcmNlbnQgZW5jb2RpbmcgZm9yIGlUdW5lcyBBUEkgc2VhcmNoXG5cdFx0dmFyIHF1ZXJ5ID0gdGhpcy5zdGF0ZS50ZXJtLnNwbGl0KCcgJykuam9pbignJTIwJyk7XG5cdFx0Ly8gY3JlYXRlcyBzZWFyY2ggVVJMIHdpdGggbGltaXQgb2YgZm91ciByZXN1bHRzXG5cdFx0dmFyIHNlYXJjaFVybCA9ICdodHRwczovL2l0dW5lcy5hcHBsZS5jb20vc2VhcmNoP3Rlcm09PyQnICsgcXVlcnkgKyAnJmVudGl0eT1hbGJ1bSZsaW1pdD00JztcblxuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IHNlYXJjaFVybCxcblx0XHRcdGRhdGEgOiB7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRkYXRhVHlwZTogJ2pzb25wJyxcblx0XHRcdHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHQvLyBjaGFuZ2VzIHN0YXRlIG9mIHJlc3VsdHMsIHRyaWdnZXJpbmcgdmlldyBjaGFuZ2Vcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogZGF0YS5yZXN1bHRzfSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Ly8gc2VuZCBzZWxlY3RlZCBhbGJ1bSBhbmQgbGlzdGVuIGRhdGUgdG8gZGIgdmlhIHBvc3QgcmVxdWVzdFxuXHRhZGROZXdFbnRyeSAoYWxidW0sIGRhdGUpIHtcblx0XHQvLyBzZW5kIG9iamVjdCB3aXRoIGtleXMgYWxidW0gYW5kIGRhdGVcblx0XHR2YXIgbmV3RW50cnkgPSB7YWxidW06IGFsYnVtLCBkYXRlOiBkYXRlLnNsaWNlKDAsMTApfTtcblx0XHQvLyB1c2VyIGNhbiBvbmx5IHN1Ym1pdCBvbmUgYWxidW1cblx0XHRpZiAodGhpcy5zdGF0ZS5yZXN1bHRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0JC5hamF4KHtcblx0XHRcdFx0dXJsOiAnL3F1ZXJ5ZGInLFxuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRcdGRhdGFUeXBlOiAndGV4dCcsXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KG5ld0VudHJ5KSxcblx0XHRcdFx0c3VjY2VzczogKHJlc3VsdHMpID0+IHtcblx0XHRcdFx0XHQvLyBjbGVhcnMgcHJldmlvdXNseSBzZXQgc3RhdGVcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHRlcm06ICcnLFxuXHRcdFx0XHRcdFx0cmVzdWx0czogW10sXG5cdFx0XHRcdFx0XHRzZWxlY3RlZExpc3RlbkRhdGU6IG51bGxcblx0XHRcdFx0XHR9KTtcbiAgICAgICAgICAvLyBnZXRzIHVzZXIgZW50cmllcyBmcm9tIGRiIGFuZCByZXJlbmRlcnMgZW50cnkgbGlzdFxuXHRcdFx0XHRcdHRoaXMucHJvcHMuZ2V0VXNlckVudHJpZXMoKTtcblx0XHRcdFx0XHQvLyBjbGVhciB0aGUgc2VhcmNoIGJhclxuXHRcdFx0XHRcdCQoJy5zZWFyY2gtYmFyJykudmFsKCcnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cdCAgIFx0ICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nc2VhcmNoLXByb21wdCc+QWRkIGFuIGFsYnVtOjwvaDM+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHNlYXJjaC1iYXJcIj48L2lucHV0PlxuXHRcdFx0XHRcdDxicj48L2JyPlxuXHRcdCAgICAgIDxTZWFyY2hCYXIgc2VhcmNoPXtfLmRlYm91bmNlKHRoaXMuaVR1bmVzU2VhcmNoLmJpbmQodGhpcyksIDMwMCl9XG5cdFx0XHRcdFx0XHQgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7dGhpcy5hZGROZXdFbnRyeSh0aGlzLnN0YXRlLnJlc3VsdHNbMF0sIHRoaXMuc3RhdGUuc2VsZWN0ZWRMaXN0ZW5EYXRlKTsgJCgnI2FkZC1hbGJ1bS1idG4nKS50b2dnbGUoKX19PlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9J2FkZC1hbGJ1bS1idG4nPkFkZCBhbiBhbGJ1bTwvYnV0dG9uPlxuXHRcdFx0XHRcdCAgICAgICAgIDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8UmVzdWx0c0xpc3QgYWxidW1zPXt0aGlzLnN0YXRlLnJlc3VsdHN9XG5cdFx0XHRcdFx0XHRhZGROZXdFbnRyeT17dGhpcy5wcm9wcy5hZGROZXdFbnRyeX1cblx0XHRcdFx0XHRcdHNldFNlbGVjdGVkPXt0aGlzLnNldFNlbGVjdGVkLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3Jlc3VsdHMtY29udGFpbmVyJyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cbiAgICApO1xuICB9O1xufTtcblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDtcbiJdfQ==