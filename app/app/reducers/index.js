// @flow

import { combineReducers } from 'redux-immutable'

import responsiveStateReducer from './responsive'

const rootReducer = combineReducers({
  browser: responsiveStateReducer,
})

export default rootReducer
