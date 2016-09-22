// @flow

import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import './app/styles/global.scss'
import Root from './app/Root'
import configureStore from './app/store/configureStore'
import rootSaga from './app/sagas'

const store = configureStore()
store.runSaga(rootSaga)

const appNode = document.createElement('div')
document.body.appendChild(appNode)

const renderRoot = (RootComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </AppContainer>,
    appNode
  )
}
renderRoot(Root)

if (module.hot) {
  module.hot.accept('./app/Root', () => {
    const NewRoot = require('./app/Root').default
    renderRoot(NewRoot)
  })
}
