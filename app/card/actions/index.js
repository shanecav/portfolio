// @flow

import { createAction } from 'redux-actions'

// Profile entity
export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const FETCH_PROFILE_FAIL = 'FETCH_PROFILE_FAIL'
export const profile = {
  request: createAction(FETCH_PROFILE_REQUEST),
  success: createAction(FETCH_PROFILE_SUCCESS),
  failure: createAction(FETCH_PROFILE_FAIL),
}
