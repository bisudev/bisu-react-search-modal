import React from 'react'
import cn from 'classnames'

const ResultItemWrapper = ({ children, className }) => {
  const cl = cn('search-results--items', className)
  return (
    <div className={cl}>
      {children}
    </div>
  )
}

export default ResultItemWrapper
