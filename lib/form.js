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

var _renderIcon = function _renderIcon(searching, offline) {
  if (searching) {
    return _react2.default.createElement(_ThreeBounce2.default, { color: '#bbb', size: 8 });
  }
  if (offline) {
    return _react2.default.createElement(_zoomOutline2.default, null);
  }

  return _react2.default.createElement(_search2.default, null);
};

var Form = function Form(_ref) {
  var model = _ref.model,
      placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit,
      searching = _ref.searching,
      offline = _ref.offline;
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
          return undefined._input = c;
        },
        autoComplete: 'off',
        autoFocus: true
      }),
      _react2.default.createElement(
        'div',
        { className: 'add-on' },
        _renderIcon(searching, offline)
      )
    )
  );
};

/*
class Form extends Component {
  _onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this._input.value)
  }

  render() {
    const { placeholder } = this.props

    return (
      <RForm className="search-form" onSubmit={this._onSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            ref={c => (this._input = c)}
            autoFocus
          />
          <div className="add-on">
            <Icon />
          </div>
        </div>
      </RForm>
    )
  }
}
*/

exports.default = Form;
module.exports = exports['default'];