// @flow

import { compose, createStore } from 'redux'
import { createResponsiveStoreEnhancer } from 'redux-responsive'

import rootReducer from '../reducers'

import type { Map } from 'immutable'

export default function configureStore (initialState: ?Map<string, *>) {
  return {
    ...createStore(
      rootReducer,
      initialState,
      compose(
        createResponsiveStoreEnhancer(),
      ),
    ),
  }
}
