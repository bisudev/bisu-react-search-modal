import React from 'react';

// search result span
var ResultSpan = function ResultSpan(_ref) {
  var children = _ref.children,
      w = _ref.w,
      className = _ref.className;
  return React.createElement(
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

export default ResultSpan;