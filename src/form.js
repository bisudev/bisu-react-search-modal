import React from 'react'
import { Form as RForm, Field } from 'react-redux-form/immutable'
import Icon from 'react-icons/lib/md/search'

const Form = ({ model, placeholder, onSubmit }) =>
  <RForm model={model} className="search-form" onSubmit={onSubmit}>
    <Field model=".q">
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
    </Field>
  </RForm>

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

export default Form
