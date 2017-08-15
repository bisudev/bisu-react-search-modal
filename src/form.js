import React, { Component } from 'react'
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

class Form extends Component {
  componentDidMount() {
    setTimeout(() => {
      this._input.select()
    }, 10)
  }

  render() {
    const { model, placeholder, onSubmit, searching, offline } = this.props

    return (
      <RForm model={model} className="search-form" onSubmit={onSubmit}>
        <Field model=".q">
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            ref={c => (this._input = c)}
            autoComplete="off"
          />
          <div className="add-on">
            {_renderIcon(searching, offline)}
          </div>
        </Field>
      </RForm>
    )
  }
}

export default Form
