// @flow

import { compose, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createResponsiveStoreEnhancer } from 'redux-responsive'

import rootReducer from '../reducers'

import type { Map } from 'immutable'

export default function configureStore (initialState: ?Map<string, *>) {
  const sagaMiddleware = createSagaMiddleware()
  const store = {
    ...createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware),
        createResponsiveStoreEnhancer(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ),
    ),
    runSaga: sagaMiddleware.run
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
