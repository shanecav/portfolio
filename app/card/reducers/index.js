// @flow

import {
  Record,
  List,
} from 'immutable'

import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
} from '../actions'
import ProfileRecord from '../records/Profile'
import NetworkRecord from '../records/Network'
import FETCH_STATUS from '../../app/constants/fetch-status'

import type { Action } from '../../../types/redux'

export const ProfileState = Record({
  data: ProfileRecord(),
  fetchStatus: FETCH_STATUS.EMPTY,
})

const profile = (state: ProfileState = ProfileState(), action: Action): ProfileState => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return state.set('fetchStatus', FETCH_STATUS.FETCHING)
    case FETCH_PROFILE_SUCCESS:
      const profile = Object.assign({}, action.payload, {
        networks: List(action.payload.networks.map(network => NetworkRecord(network)))
      })
      return state.set('data', ProfileRecord(profile))
                  .set('fetchStatus', FETCH_STATUS.FETCHED)
    case FETCH_PROFILE_FAIL:
      return state.set('fetchStatus', FETCH_STATUS.ERROR)
    default:
      return state
  }
}

export default profile
