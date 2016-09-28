// @flow

import {
  List,
  Record,
} from 'immutable'

import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAIL,
} from '../actions'
import ProjectRecord from '../records/Project'
import FETCH_STATUS from '../../app/constants/fetch-status'

import type { Action } from '../../../types/redux'

export const ProjectsState = Record({
  data: List(),
  fetchStatus: FETCH_STATUS.EMPTY,
})

const projects = (state: ProjectsState = ProjectsState(), action: Action): ProjectsState => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return state.set('fetchStatus', FETCH_STATUS.FETCHING)
    case FETCH_PROJECTS_SUCCESS:
      return state.set('data',
                    List(action.payload.map((project) => (
                      ProjectRecord(Object.assign({}, project, {
                        server: List(project.server),
                        client: List(project.client),
                      }))
                    )))
                  )
                  .set('fetchStatus', FETCH_STATUS.FETCHED)
    case FETCH_PROJECTS_FAIL:
      return state.set('fetchStatus', FETCH_STATUS.ERROR)
    default:
      return state
  }
}

export default projects
