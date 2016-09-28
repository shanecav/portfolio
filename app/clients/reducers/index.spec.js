// @flow

import {
  List,
} from 'immutable'

import clientsReducer, {
  ClientsState,
} from './'
import * as actions from '../actions'
import FETCH_STATUS from '../../app/constants/fetch-status'

describe('clients reducer', () => {
  it('state defaults to an empty ClientsState', () => {
    const initialState = clientsReducer(undefined, {})
    expect(initialState).toEqual(ClientsState())
  })

  it('FETCH_CLIENTS_REQUEST updates fetchStatus', () => {
    const state = clientsReducer(undefined, actions.clients.request())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHING)
  })

  it('FETCH_CLIENTS_SUCCESS updates data', () => {
    const content = ['some text', 'other text']
    const state = clientsReducer(undefined, actions.clients.success(content))
    expect(state.data).toEqual(List(content))
  })

  it('FETCH_CLIENTS_SUCCESS updates fetchStatus', () => {
    const content = 'some text'
    const state = clientsReducer(undefined, actions.clients.success(content))
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHED)
  })

  it('FETCH_CLIENTS_FAIL updates fetchStatus', () => {
    const state = clientsReducer(undefined, actions.clients.failure())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.ERROR)
  })
})
