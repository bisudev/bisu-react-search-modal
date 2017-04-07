import React, { PropTypes, Component } from 'react'
import Modal from 'bisu-react-modal'
import Icon from 'react-icons/lib/md/search'

import Form from './form'

const SearchModal = ({ placeholder, isOpen, handleClose, onSubmit, children }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Modal handleClose={handleClose} isOpen>
      <div className="bisu--search-modal">
        <Form
          placeholder={placeholder}
          onSubmit={onSubmit}
        />
        {children}
      </div>
    </Modal>
  )
}

SearchModal.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.any,
}

export default SearchModal
