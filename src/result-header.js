import React from 'react'
import cn from 'classnames'

const ResultHeader = ({ children, className }) => {
  const cl = cn('search-results--header', className)
  return (
    <div className={cl}>
      {children}
    </div>
  )
}

export default ResultHeader
