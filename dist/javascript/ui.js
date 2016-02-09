'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { value: 0 } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT':
      return _extends({}, state, { value: state.value + 1 });
    case 'DECREMENT':
      return _extends({}, state, { value: state.value - 1 });
    default:
      return state;
  }
}

var store = (0, _redux.createStore)(counter);

function select(state) {
  return state;
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.value
    );
  };

  return App;
}(_react.Component);

var ConnectedApp = (0, _reactRedux.connect)(select)(App);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(ConnectedApp, null)
), document.getElementById("app"));