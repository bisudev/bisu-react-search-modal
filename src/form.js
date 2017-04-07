import React, { Component } from 'react'
import Icon from 'react-icons/lib/md/search'

class Form extends Component {

  _onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this._input.value)
  }

  render() {
    const { placeholder } = this.props

    return (
      <form className="search-form" onSubmit={this._onSubmit}>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder={placeholder}
            ref={(c) => this._input = c}
            autoFocus
          />
          <div className="add-on"><Icon /></div>
        </div>
      </form>
    )
  }
}

export default Form
