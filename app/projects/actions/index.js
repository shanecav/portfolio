// @flow

import { createAction } from 'redux-actions'

// Profile entity
export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST'
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
export const FETCH_PROJECTS_FAIL = 'FETCH_PROJECTS_FAIL'
export const projects = {
  request: createAction(FETCH_PROJECTS_REQUEST),
  success: createAction(FETCH_PROJECTS_SUCCESS),
  failure: createAction(FETCH_PROJECTS_FAIL),
}
