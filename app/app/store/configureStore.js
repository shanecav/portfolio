// @flow

import { compose, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'

import type { Record } from 'immutable'
import type { ProfileState } from '../../card/reducers'
type InitialState = Record<{
  profile: ProfileState,
}>

export default function configureStore (initialState: ?InitialState) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ),
    ),
    runSaga: sagaMiddleware.run
  }
}
