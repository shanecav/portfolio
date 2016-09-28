// @flow

import { combineReducers } from 'redux-immutable'

import responsiveStateReducer from './responsive'
import profile from '../../card/reducers'
import projects from '../../projects/reducers'

const rootReducer = combineReducers({
  profile,
  projects,
  browser: responsiveStateReducer,
})

export default rootReducer
