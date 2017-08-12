'use strict';

exports.__esModule = true;
exports.ResultSpan = exports.ResultItemWrapper = exports.ResultHeader = exports.ResultWrapper = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bisuReactModal = require('bisu-react-modal');

var _bisuReactModal2 = _interopRequireDefault(_bisuReactModal);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _resultWrapper = require('./result-wrapper');

var _resultWrapper2 = _interopRequireDefault(_resultWrapper);

var _resultHeader = require('./result-header');

var _resultHeader2 = _interopRequireDefault(_resultHeader);

var _resultItemWrapper = require('./result-item-wrapper');

var _resultItemWrapper2 = _interopRequireDefault(_resultItemWrapper);

var _resultSpan = require('./result-span');

var _resultSpan2 = _interopRequireDefault(_resultSpan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchModal = function SearchModal(_ref) {
  var children = _ref.children,
      model = _ref.model,
      className = _ref.className,
      overlayClassName = _ref.overlayClassName,
      placeholder = _ref.placeholder,
      isOpen = _ref.isOpen,
      draggable = _ref.draggable,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;

  if (!isOpen) {
    return null;
  }

  var cl = (0, _classnames2.default)('bisu--search-modal', className);

  return _react2.default.createElement(
    _bisuReactModal2.default,
    {
      className: cl,
      overlayClassName: overlayClassName,
      onClose: onClose,
      draggable: draggable,
      withClose: true,
      isOpen: true
    },
    _react2.default.createElement(
      'div',
      { className: 'bisu--search-modal-wrapper' },
      _react2.default.createElement(_form2.default, { model: model, placeholder: placeholder, onSubmit: onSubmit }),
      children
    )
  );
};

SearchModal.defaultProps = {
  overlayClassName: 'dark'
};

exports.default = SearchModal;
exports.ResultWrapper = _resultWrapper2.default;
exports.ResultHeader = _resultHeader2.default;
exports.ResultItemWrapper = _resultItemWrapper2.default;
exports.ResultSpan = _resultSpan2.default;