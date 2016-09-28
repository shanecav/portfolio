// @flow

import { takeLatest } from 'redux-saga'
import { fork, put } from 'redux-saga/effects'

import * as actions from '../actions'
import { api } from '../../app/services'
import fetchEntity from '../../app/sagas/fetchEntity'

const loadClients = fetchEntity.bind(null, actions.clients, api.getClients)

function * watchFetchClientsRequest (): Generator<*, *, *> {
  yield * takeLatest(actions.FETCH_CLIENTS_REQUEST, loadClients)
}

export default function * clientsSaga (): Generator<*, *, *> {
  yield [
    // setup
    fork(watchFetchClientsRequest),

    // init
    put(actions.clients.request()),
  ]
}
