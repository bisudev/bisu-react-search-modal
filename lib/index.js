'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bisuReactModal = require('bisu-react-modal');

var _bisuReactModal2 = _interopRequireDefault(_bisuReactModal);

var _search = require('react-icons/lib/md/search');

var _search2 = _interopRequireDefault(_search);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchModal = function SearchModal(_ref) {
  var placeholder = _ref.placeholder,
      isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      onSubmit = _ref.onSubmit,
      children = _ref.children;

  if (!isOpen) {
    return null;
  }

  return _react2.default.createElement(
    _bisuReactModal2.default,
    { handleClose: handleClose, isOpen: true },
    _react2.default.createElement(
      'div',
      { className: 'bisu--search-modal' },
      _react2.default.createElement(_form2.default, {
        placeholder: placeholder,
        onSubmit: onSubmit
      }),
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? SearchModal.propTypes = {
  placeholder: _react.PropTypes.string,
  onSubmit: _react.PropTypes.func,
  children: _react.PropTypes.any
} : void 0;

exports.default = SearchModal;
module.exports = exports['default'];