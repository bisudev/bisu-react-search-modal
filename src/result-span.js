import React from 'react'

// search result span
const ResultSpan = ({ children, w, className }) =>
  <div
    className={className}
    style={{ flexGrow: Number(w), flexBasis: Number(w) }}
  >
    {children}
  </div>

ResultSpan.defaultProps = {
  w: '1',
}

export default ResultSpan
