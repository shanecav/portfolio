// @flow

import { fork } from 'redux-saga/effects'

import cardSaga from '../../card/sagas'
import projectsSaga from '../../projects/sagas'
import aboutSaga from '../../about/sagas'
import clientsSaga from '../../clients/sagas'

export default function * rootSaga (): Generator<*, *, *> {
  yield [
    fork(cardSaga),
    fork(projectsSaga),
    fork(aboutSaga),
    fork(clientsSaga),
  ]
}
