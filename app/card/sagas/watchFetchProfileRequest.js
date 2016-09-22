// @flow

import { takeLatest } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { api } from '../../app/services'
import * as actions from '../actions'

export function * fetchProfile (): Generator<*, *, *> {
  try {
    const profile = yield call(api.getProfile)
    yield put(actions.profile.success(profile))
  } catch (error) {
    yield put(actions.profile.failure(error))
  }
}

export default function * watchFetchProfileRequest (): Generator<*, *, *> {
  yield * takeLatest(actions.FETCH_PROFILE_REQUEST, fetchProfile)
}
