// @flow

import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'

import * as actions from '../actions'
import { api } from '../../app/services'
import fetchEntity from '../../app/sagas/fetchEntity'

const loadProfile = fetchEntity.bind(null, actions.profile, api.getProfile)

function * watchFetchProfileRequest (): Generator<*, *, *> {
  yield * takeLatest(actions.FETCH_PROFILE_REQUEST, loadProfile)
}

export default function * cardSaga (): Generator<*, *, *> {
  yield [
    // setup
    fork(watchFetchProfileRequest),

    // init
    put(actions.profile.request()),
  ]
}
