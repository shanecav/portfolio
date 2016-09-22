// @flow

import { combineReducers } from 'redux-immutable'

import profile from '../../card/reducers'

const rootReducer = combineReducers({
  profile,
})

export default rootReducer
