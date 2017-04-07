import React, { PropTypes, Component } from 'react';
import Modal from 'bisu-react-modal';
import Icon from 'react-icons/lib/md/search';

import Form from './form';

var SearchModal = function SearchModal(_ref) {
  var placeholder = _ref.placeholder,
      isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      onSubmit = _ref.onSubmit,
      children = _ref.children;

  if (!isOpen) {
    return null;
  }

  return React.createElement(
    Modal,
    { handleClose: handleClose, isOpen: true },
    React.createElement(
      'div',
      { className: 'bisu--search-modal' },
      React.createElement(Form, {
        placeholder: placeholder,
        onSubmit: onSubmit
      }),
      children
    )
  );
};

process.env.NODE_ENV !== "production" ? SearchModal.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.any
} : void 0;

export default SearchModal;