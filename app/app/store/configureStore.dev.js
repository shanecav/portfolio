// @flow

import { compose, createStore } from 'redux'
import { createResponsiveStoreEnhancer } from 'redux-responsive'

import rootReducer from '../reducers'

import type { Map } from 'immutable'

export default function configureStore (initialState: ?Map<string, *>) {
  const store = {
    ...createStore(
      rootReducer,
      initialState,
      compose(
        createResponsiveStoreEnhancer(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ),
    ),
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // $FlowIgnore
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
