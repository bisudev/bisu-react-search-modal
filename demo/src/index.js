import React, { Component } from 'react'
import {render} from 'react-dom'

import SearchModal from '../../src'
import './demo.scss'

class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
    }
  }

  _openModal = () => {
    this.setState({
      openModal: true,
    })
  }

  _closeModal = () => {
    this.setState({
      openModal: false,
    })
  }

  _onSubmit = (term) => {
    alert('You searched for: ', term)
  }

  render() {
    const { openModal } = this.state

    return (
      <div>
        <h1>bisu-react-search-modal Demo</h1>
        <button type="button" onClick={this._openModal} className="btn btn-primary">Open Search Modal</button>
        <SearchModal
          handleClose={this._closeModal}
          isOpen={openModal}
          placeholder="Search Item"
          onSubmit={this._onSubmit}
        >
          <div>search results here</div>
        </SearchModal>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
