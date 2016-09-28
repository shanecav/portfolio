// @flow

import { createAction } from 'redux-actions'

// Profile entity
export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS_REQUEST'
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS'
export const FETCH_CLIENTS_FAIL = 'FETCH_CLIENTS_FAIL'
export const clients = {
  request: createAction(FETCH_CLIENTS_REQUEST),
  success: createAction(FETCH_CLIENTS_SUCCESS),
  failure: createAction(FETCH_CLIENTS_FAIL),
}
