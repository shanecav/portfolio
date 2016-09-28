// @flow

import {
  List,
} from 'immutable'

import profileReducer, {
  ProfileState,
} from './'
import * as actions from '../actions'
import FETCH_STATUS from '../../app/constants/fetch-status'
import ProfileRecord from '../records/Profile'

describe('profile reducer', () => {
  it('state defaults to an empty ProfileState', () => {
    const initialState = profileReducer(undefined, {})
    expect(initialState).toEqual(ProfileState())
  })

  it('FETCH_PROFILE_REQUEST updates fetchStatus', () => {
    const state = profileReducer(undefined, actions.profile.request())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHING)
  })

  it('FETCH_PROFILE_SUCCESS updates data', () => {
    const profileObject = {
      name: 'Shane',
      photoUrl: 'test',
      title: 'Person',
      networks: List(),
    }
    const state = profileReducer(undefined, actions.profile.success(profileObject))
    expect(state.data).toEqual(ProfileRecord(profileObject))
  })

  it('FETCH_PROFILE_SUCCESS updates fetchStatus', () => {
    const profileObject = {
      name: 'Shane',
      photoUrl: 'test',
      title: 'Person',
      networks: List(),
    }
    const state = profileReducer(undefined, actions.profile.success(profileObject))
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHED)
  })

  it('FETCH_PROFILE_FAIL updates fetchStatus', () => {
    const state = profileReducer(undefined, actions.profile.failure())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.ERROR)
  })
})
