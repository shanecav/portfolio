// @flow

import { combineReducers } from 'redux'

import responsiveStateReducer from './responsive'

const rootReducer = combineReducers({
  browser: responsiveStateReducer,
})

export default rootReducer
