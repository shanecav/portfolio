// @flow

import { createAction } from 'redux-actions'

// Profile entity
export const FETCH_ABOUT_REQUEST = 'FETCH_ABOUT_REQUEST'
export const FETCH_ABOUT_SUCCESS = 'FETCH_ABOUT_SUCCESS'
export const FETCH_ABOUT_FAIL = 'FETCH_ABOUT_FAIL'
export const about = {
  request: createAction(FETCH_ABOUT_REQUEST),
  success: createAction(FETCH_ABOUT_SUCCESS),
  failure: createAction(FETCH_ABOUT_FAIL),
}
