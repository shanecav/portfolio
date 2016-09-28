// @flow

import { combineReducers } from 'redux-immutable'

import responsiveStateReducer from './responsive'
import profile from '../../card/reducers'
import projects from '../../projects/reducers'
import about from '../../about/reducers'
import clients from '../../clients/reducers'

const rootReducer = combineReducers({
  profile,
  projects,
  about,
  clients,
  browser: responsiveStateReducer,
})

export default rootReducer
