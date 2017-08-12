'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('react-redux-form/immutable');

var _search = require('react-icons/lib/md/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var model = _ref.model,
      placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit;
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
        autoFocus: true
      }),
      _react2.default.createElement(
        'div',
        { className: 'add-on' },
        _react2.default.createElement(_search2.default, null)
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