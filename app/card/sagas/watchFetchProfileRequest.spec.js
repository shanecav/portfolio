// @flow

import { put, call } from 'redux-saga/effects'

import { api } from '../../app/services'
import * as actions from '../actions'

import { fetchProfile } from './watchFetchProfileRequest'

describe('fetchProfile saga', () => {
  const generator = fetchProfile()
  let next = generator.next(actions.profile.request()) // init

  it('first calls api.getProfile', () => {
    expect(next.value).toEqual(call(api.getProfile))
  })

  it('then dispatches actions.profile.success with profile data', () => {
    const profile = {data: 'profile data'}
    next = generator.next(profile) // y1
    expect(next.value).toEqual(put(actions.profile.success(profile)))
  })

  it('then finishes', () => {
    next = generator.next() // y2 - return
    expect(next).toEqual({ done: true, value: undefined })
  })

  it('dispatches actions.profile.failure if error in the api call', () => {
    const newGenerator = fetchProfile()
    newGenerator.next(actions.profile.request()) // init
    const thrownValue = newGenerator.throw('error').value // y1 with error
    expect(thrownValue).toEqual(put(actions.profile.failure('error')))
  })
})
