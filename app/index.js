// @flow

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { FirebaseProvider } from 'firebase-react'

import './app/styles/global.scss'
import Root from './app/Root'
import configureStore from './app/store/configureStore'
import firebaseApp from './app/api/firebase'

const store = configureStore()

const appNode = document.createElement('div')
document.body.appendChild(appNode)

const renderRoot = (RootComponent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <FirebaseProvider firebase={firebaseApp}>
          <RootComponent />
        </FirebaseProvider>
      </Provider>
    </AppContainer>,
    appNode
  )
}
renderRoot(Root)

if (module.hot) {
  // $FlowIgnore
  module.hot.accept('./app/Root', () => {
    const NewRoot = require('./app/Root').default
    renderRoot(NewRoot)
  })
}
