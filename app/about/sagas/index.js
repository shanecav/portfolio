// @flow

import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'

import * as actions from '../actions'
import { api } from '../../app/services'
import fetchEntity from '../../app/sagas/fetchEntity'

const loadAbout = fetchEntity.bind(null, actions.about, api.getAbout)

function * watchFetchAboutRequest (): Generator<*, *, *> {
  yield * takeLatest(actions.FETCH_ABOUT_REQUEST, loadAbout)
}

export default function * aboutSaga (): Generator<*, *, *> {
  yield [
    // setup
    fork(watchFetchAboutRequest),

    // init
    put(actions.about.request()),
  ]
}
