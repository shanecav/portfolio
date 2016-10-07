// @flow

import { compose, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createResponsiveStoreEnhancer } from 'redux-responsive'

import rootReducer from '../reducers'

import type { Map } from 'immutable'

export default function configureStore (initialState: ?Map<string, *>) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware),
        createResponsiveStoreEnhancer(),
      ),
    ),
    runSaga: sagaMiddleware.run
  }
}
