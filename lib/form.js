'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('react-redux-form/immutable');

var _search = require('react-icons/lib/md/search');

var _search2 = _interopRequireDefault(_search);

var _zoomOutline = require('react-icons/lib/ti/zoom-outline');

var _zoomOutline2 = _interopRequireDefault(_zoomOutline);

var _ThreeBounce = require('better-react-spinkit/dist/ThreeBounce');

var _ThreeBounce2 = _interopRequireDefault(_ThreeBounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _renderIcon = function _renderIcon(searching, offline) {
  if (searching) {
    return _react2.default.createElement(_ThreeBounce2.default, { color: '#bbb', size: 8 });
  }
  if (offline) {
    return _react2.default.createElement(_zoomOutline2.default, null);
  }

  return _react2.default.createElement(_search2.default, null);
};

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Form.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    setTimeout(function () {
      _this2._input.select();
    }, 10);
  };

  Form.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        model = _props.model,
        placeholder = _props.placeholder,
        onSubmit = _props.onSubmit,
        searching = _props.searching,
        offline = _props.offline;


    return _react2.default.createElement(
      _immutable.Form,
      { model: model, className: 'search-form', onSubmit: onSubmit },
      _react2.default.createElement(
        _immutable.Field,
        { model: '.q' },
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: placeholder,
          ref: function ref(c) {
            return _this3._input = c;
          },
          autoComplete: 'off'
        }),
        _react2.default.createElement(
          'div',
          { className: 'add-on' },
          _renderIcon(searching, offline)
        )
      )
    );
  };

  return Form;
}(_react.Component);

exports.default = Form;
module.exports = exports['default'];