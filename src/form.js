import React from 'react'
import { Form as RForm, Field } from 'react-redux-form/immutable'
import Icon from 'react-icons/lib/md/search'
import Icon2 from 'react-icons/lib/ti/zoom-outline'
import ThreeBounce from 'better-react-spinkit/dist/ThreeBounce'

const _renderIcon = (searching, offline) => {
  if (searching) {
    return <ThreeBounce color="#bbb" size={8} />
  }
  if (offline) {
    return <Icon2 />
  }

  return <Icon />
}

const Form = ({ model, placeholder, onSubmit, searching, offline }) =>
  <RForm model={model} className="search-form" onSubmit={onSubmit}>
    <Field model=".q">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        ref={c => (this._input = c)}
        autoComplete="off"
        autoFocus
      />
      <div className="add-on">
        {_renderIcon(searching, offline)}
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
