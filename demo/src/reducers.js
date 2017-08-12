import { combineReducers } from 'redux'
import { createForms } from 'react-redux-form/immutable'

import { searchState } from './reducer1'

export default combineReducers({
  // react-redux-form
  ...createForms({
    searchState,
  }),
})
