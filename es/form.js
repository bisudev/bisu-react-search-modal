function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Form as RForm, Field } from 'react-redux-form/immutable';
import Icon from 'react-icons/lib/md/search';
import Icon2 from 'react-icons/lib/ti/zoom-outline';
import ThreeBounce from 'better-react-spinkit/dist/ThreeBounce';

var _renderIcon = function _renderIcon(searching, offline) {
  if (searching) {
    return React.createElement(ThreeBounce, { color: '#bbb', size: 8 });
  }
  if (offline) {
    return React.createElement(Icon2, null);
  }

  return React.createElement(Icon, null);
};

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Form.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    setTimeout(function () {
      _this2._input.select();
    }, 10);
  };

  Form.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        model = _props.model,
        placeholder = _props.placeholder,
        onSubmit = _props.onSubmit,
        searching = _props.searching,
        offline = _props.offline;


    return React.createElement(
      RForm,
      { model: model, className: 'search-form', onSubmit: onSubmit },
      React.createElement(
        Field,
        { model: '.q' },
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: placeholder,
          ref: function ref(c) {
            return _this3._input = c;
          },
          autoComplete: 'off'
        }),
        React.createElement(
          'div',
          { className: 'add-on' },
          _renderIcon(searching, offline)
        )
      )
    );
  };

  return Form;
}(Component);

export default Form;