// @flow

import { put, call } from 'redux-saga/effects'

import type { Action } from '../../../types/redux'
type ActionCreator = (p?: mixed) => Action
export type Entity = {
  request: ActionCreator,
  success: ActionCreator,
  failure: ActionCreator,
}

export default function * fetchEntity (entity: Entity, apiFn: Function): Generator<*, *, *> {
  try {
    const result = yield call(apiFn)
    yield put(entity.success(result))
  } catch (error) {
    yield put(entity.failure(error.message))
  }
}
