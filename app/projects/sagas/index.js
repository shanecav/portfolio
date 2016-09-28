// @flow

import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'

import * as actions from '../actions'
import { api } from '../../app/services'
import fetchEntity from '../../app/sagas/fetchEntity'

const loadProjects = fetchEntity.bind(null, actions.projects, api.getProjects)

function * watchFetchProjectsRequest (): Generator<*, *, *> {
  yield * takeLatest(actions.FETCH_PROJECTS_REQUEST, loadProjects)
}

export default function * projectsSaga (): Generator<*, *, *> {
  yield [
    // setup
    fork(watchFetchProjectsRequest),

    // init
    put(actions.projects.request()),
  ]
}
