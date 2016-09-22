// @flow

import { fork } from 'redux-saga/effects'

import cardSaga from '../../card/sagas'

export default function * rootSaga (): Generator<*, *, *> {
  yield fork(cardSaga)
}
