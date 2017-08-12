import React from 'react';
import cn from 'classnames';

var ResultHeader = function ResultHeader(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var cl = cn('search-results--header', className);
  return React.createElement(
    'div',
    { className: cl },
    children
  );
};

export default ResultHeader;