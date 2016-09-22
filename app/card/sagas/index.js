// @flow

import { fork, put } from 'redux-saga/effects'

import watchFetchProfileRequest from './watchFetchProfileRequest'
import * as actions from '../actions'

export default function * cardSaga (): Generator<*, *, *> {
  yield [
    // setup
    fork(watchFetchProfileRequest),

    // init
    put(actions.profile.request()),
  ]
}
