import React from 'react';
import cn from 'classnames';

var ResultWrapper = function ResultWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var cl = cn('search-results', 'list-group', className);
  return React.createElement(
    'div',
    { className: cl },
    children
  );
};

export default ResultWrapper;