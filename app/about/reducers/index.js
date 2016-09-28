// @flow

import {
  List,
  Record,
} from 'immutable'

import {
  FETCH_ABOUT_REQUEST,
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_FAIL,
} from '../actions'
import FETCH_STATUS from '../../app/constants/fetch-status'

import type { Action } from '../../../types/redux'

export const AboutState = Record({
  data: List(),
  fetchStatus: FETCH_STATUS.EMPTY,
})

const about = (state: AboutState = AboutState(), action: Action): AboutState => {
  switch (action.type) {
    case FETCH_ABOUT_REQUEST:
      return state.set('fetchStatus', FETCH_STATUS.FETCHING)
    case FETCH_ABOUT_SUCCESS:
      return state.set('data', List(action.payload))
                  .set('fetchStatus', FETCH_STATUS.FETCHED)
    case FETCH_ABOUT_FAIL:
      return state.set('fetchStatus', FETCH_STATUS.ERROR)
    default:
      return state
  }
}

export default about
