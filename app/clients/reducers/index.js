// @flow

import {
  List,
  Record,
} from 'immutable'

import {
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAIL,
} from '../actions'
import FETCH_STATUS from '../../app/constants/fetch-status'

import type { Action } from '../../../types/redux'

export const ClientsState = Record({
  data: List(),
  fetchStatus: FETCH_STATUS.EMPTY,
})

const clients = (state: ClientsState = ClientsState(), action: Action): ClientsState => {
  switch (action.type) {
    case FETCH_CLIENTS_REQUEST:
      return state.set('fetchStatus', FETCH_STATUS.FETCHING)
    case FETCH_CLIENTS_SUCCESS:
      return state.set('data', List(action.payload))
                  .set('fetchStatus', FETCH_STATUS.FETCHED)
    case FETCH_CLIENTS_FAIL:
      return state.set('fetchStatus', FETCH_STATUS.ERROR)
    default:
      return state
  }
}

export default clients
