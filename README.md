# bisu-react-search-modal

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React Search Modal similar to Spotlight.

## Installation
`npm install --save bisu-react-search-modal`  
then include this scss file to your main scss
`@import '~bisu-react-search-modal/lib/style.scss';`

## Usage
```
import React, { Component } from 'react'
import SearchModal from 'bisu-react-search-modal'

class ShowModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  _onSubmit = (term) => {
    alert('You searched for: ', term)
  }

  render() {
    const { showModal } = this.state

    return (
      <div>
        <button type="button" onClick={() => this.setState({ showModal: true })}>Show SearchModal</button>
        <SearchModal
          placeholder="Search term"
          handleClose={() => this.setState({ showModal: false })}
          isOpen={showModal}
          onSubmit={this._onSearch}
        >
          <div>Search results here.</div>
        </SearchModal>
      </div>
    )
  }
}

```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
