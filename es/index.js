import React from 'react';
import Modal from 'bisu-react-modal';
import cn from 'classnames';

import Form from './form';

var SearchModal = function SearchModal(_ref) {
  var children = _ref.children,
      model = _ref.model,
      className = _ref.className,
      overlayClassName = _ref.overlayClassName,
      placeholder = _ref.placeholder,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit,
      isOpen = _ref.isOpen,
      draggable = _ref.draggable,
      offline = _ref.offline,
      searching = _ref.searching;

  var cl = cn('bisu--search-modal', className);

  return React.createElement(
    Modal,
    {
      className: cl,
      overlayClassName: overlayClassName,
      onClose: onClose,
      draggable: draggable,
      isOpen: isOpen,
      withClose: true
    },
    React.createElement(
      'div',
      { className: 'bisu--search-modal-wrapper' },
      React.createElement(Form, {
        model: model,
        placeholder: placeholder,
        onSubmit: onSubmit,
        offline: offline,
        searching: searching
      }),
      children
    )
  );
};

SearchModal.defaultProps = {
  overlayClassName: 'dark'
};

export default SearchModal;

import _ResultWrapper from './result-wrapper';
export { _ResultWrapper as ResultWrapper };
import _ResultHeader from './result-header';
export { _ResultHeader as ResultHeader };
import _ResultItemWrapper from './result-item-wrapper';
export { _ResultItemWrapper as ResultItemWrapper };
import _ResultSpan from './result-span';
export { _ResultSpan as ResultSpan };