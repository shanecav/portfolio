// @flow

import { fork } from 'redux-saga/effects'

import cardSaga from '../../card/sagas'
import projectsSaga from '../../projects/sagas'

export default function * rootSaga (): Generator<*, *, *> {
  yield [
    fork(cardSaga),
    fork(projectsSaga),
  ]
}
