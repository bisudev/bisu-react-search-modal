import React from 'react'
import Modal from 'bisu-react-modal'
import cn from 'classnames'

import Form from './form'

const SearchModal = ({
  children,
  model,
  className,
  overlayClassName,
  placeholder,
  onClose,
  onSubmit,
  isOpen,
  draggable,
  offline,
  searching,
}) => {
  if (!isOpen) {
    return null
  }

  const cl = cn('bisu--search-modal', className)

  return (
    <Modal
      className={cl}
      overlayClassName={overlayClassName}
      onClose={onClose}
      draggable={draggable}
      withClose
      isOpen
    >
      <div className="bisu--search-modal-wrapper">
        <Form
          model={model}
          placeholder={placeholder}
          onSubmit={onSubmit}
          offline={offline}
          searching={searching}
        />
        {children}
      </div>
    </Modal>
  )
}

SearchModal.defaultProps = {
  overlayClassName: 'dark',
}

export default SearchModal

export ResultWrapper from './result-wrapper'
export ResultHeader from './result-header'
export ResultItemWrapper from './result-item-wrapper'
export ResultSpan from './result-span'
