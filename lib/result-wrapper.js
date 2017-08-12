'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResultWrapper = function ResultWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var cl = (0, _classnames2.default)('search-results', 'list-group', className);
  return _react2.default.createElement(
    'div',
    { className: cl },
    children
  );
};

exports.default = ResultWrapper;
module.exports = exports['default'];