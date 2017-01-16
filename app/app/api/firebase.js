// @flow

import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAvs4MsvKD8JjVWC1JXSf83Eiovf8qIEGM',
  authDomain: 'shanecav-a4e0b.firebaseapp.com',
  databaseURL: 'https://shanecav-a4e0b.firebaseio.com',
  storageBucket: 'shanecav-a4e0b.appspot.com',
  messagingSenderId: '134289418927',
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp
