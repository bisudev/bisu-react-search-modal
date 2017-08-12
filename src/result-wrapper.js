import React from 'react'
import cn from 'classnames'

const ResultWrapper = ({ children, className }) => {
  const cl = cn('search-results', 'list-group', className)
  return (
    <div className={cl}>
      {children}
    </div>
  )
}

export default ResultWrapper
