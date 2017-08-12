import React from 'react';
import cn from 'classnames';

var ResultItemWrapper = function ResultItemWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var cl = cn('search-results--items', className);
  return React.createElement(
    'div',
    { className: cl },
    children
  );
};

export default ResultItemWrapper;