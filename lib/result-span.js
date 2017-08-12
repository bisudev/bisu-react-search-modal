'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// search result span
var ResultSpan = function ResultSpan(_ref) {
  var children = _ref.children,
      w = _ref.w,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    {
      className: className,
      style: { flexGrow: Number(w), flexBasis: Number(w) }
    },
    children
  );
};

ResultSpan.defaultProps = {
  w: '1'
};

exports.default = ResultSpan;
module.exports = exports['default'];