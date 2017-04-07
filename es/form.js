function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Icon from 'react-icons/lib/md/search';

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this._onSubmit = function (e) {
      e.preventDefault();
      _this.props.onSubmit(_this._input.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Form.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        placeholder = _props.placeholder,
        icon = _props.icon;


    return React.createElement(
      'form',
      { className: 'search-form', onSubmit: this._onSubmit },
      React.createElement(
        'div',
        null,
        React.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: placeholder,
          ref: function ref(c) {
            return _this2._input = c;
          },
          autoFocus: true
        }),
        React.createElement(
          'div',
          { className: 'add-on' },
          icon ? React.createElement('icon', null) : React.createElement(Icon, null)
        )
      )
    );
  };

  return Form;
}(Component);

export default Form;