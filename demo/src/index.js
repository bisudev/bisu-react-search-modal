import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'

import SearchModal, {
  ResultWrapper,
  ResultHeader,
  ResultItemWrapper,
  ResultSpan,
} from '../../src'
import './demo.scss'
import configureStore from './configure-store'
const store = configureStore()

const results = fromJS([
  {
    id: 1,
    code: 'MAIN',
    name: 'Main Campus',
    amount: '34.00',
  },
  {
    id: 2,
    code: 'BILAR',
    name: 'Bilar Campus',
    amount: '101, 200.00',
  },
  {
    id: 3,
    code: 'CALAPE',
    name: 'Calape Campus',
    amount: '3.50',
  },
  {
    id: 4,
    code: 'CLARIN',
    name: 'Clarin Campus',
    amount: '0.00',
  },
])

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      results: null,
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

  _onSubmit = term => {
    console.log('You searched for: ', term)
    this.setState({ results })
  }

  _renderResults() {
    const { results } = this.state

    if (!results || results.size === 0) {
      return null
    }

    return (
      <ResultWrapper>
        <ResultHeader>
          <ResultSpan>ID</ResultSpan>
          <ResultSpan w="3">Code</ResultSpan>
          <ResultSpan w="3">Name</ResultSpan>
          <ResultSpan w="2" className="text-right">
            Amount <small className="text-muted">(Php)</small>
          </ResultSpan>
        </ResultHeader>
        <ResultItemWrapper>
          {results.map(item =>
            <button className="list-group-item">
              <ResultSpan>
                {item.get('id')}
              </ResultSpan>
              <ResultSpan w="3">
                {item.get('code')}
              </ResultSpan>
              <ResultSpan w="3">
                {item.get('name')}
              </ResultSpan>
              <ResultSpan w="2" className="text-right">
                {item.get('amount')}
              </ResultSpan>
            </button>
          )}
        </ResultItemWrapper>
      </ResultWrapper>
    )
  }

  render() {
    const { openModal } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>bisu-react-search-modal Demo</h1>
            <button
              type="button"
              onClick={this._openModal}
              className="btn btn-info"
            >
              Open Search Modal
            </button>
            <SearchModal
              isOpen={openModal}
              placeholder="Search Item"
              className="modal-lg2"
              model="searchState"
              onSubmit={this._onSubmit}
              onClose={this._closeModal}
              draggable
            >
              {this._renderResults()}
            </SearchModal>
          </div>
        </div>
      </div>
    )
  }
}

const Main = () =>
  <Provider store={store}>
    <Demo />
  </Provider>

render(<Main />, document.querySelector('#demo'))
