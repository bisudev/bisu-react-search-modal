var _this = this;

import React from 'react';
import { Form as RForm, Field } from 'react-redux-form/immutable';
import Icon from 'react-icons/lib/md/search';

var Form = function Form(_ref) {
  var model = _ref.model,
      placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit;
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
          return _this._input = c;
        },
        autoFocus: true
      }),
      React.createElement(
        'div',
        { className: 'add-on' },
        React.createElement(Icon, null)
      )
    )
  );
};

/*
class Form extends Component {
  _onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this._input.value)
  }

  render() {
    const { placeholder } = this.props

    return (
      <RForm className="search-form" onSubmit={this._onSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            ref={c => (this._input = c)}
            autoFocus
          />
          <div className="add-on">
            <Icon />
          </div>
        </div>
      </RForm>
    )
  }
}
*/

export default Form;