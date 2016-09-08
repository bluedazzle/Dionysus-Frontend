webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createClass({
	    displayName: 'App',
	
	    getInitialState: function getInitialState() {
	        return { title: "Dionysus" };
	    },
	
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h1',
	                null,
	                this.state.title
	            )
	        );
	    }
	});
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('AppRoot'));

/***/ }
]);
//# sourceMappingURL=index.js.map