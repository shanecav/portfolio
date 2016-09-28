// @flow

import {
  List,
} from 'immutable'

import aboutReducer, {
  AboutState,
} from './'
import * as actions from '../actions'
import FETCH_STATUS from '../../app/constants/fetch-status'

describe('about reducer', () => {
  it('state defaults to an empty AboutState', () => {
    const initialState = aboutReducer(undefined, {})
    expect(initialState).toEqual(AboutState())
  })

  it('FETCH_ABOUT_REQUEST updates fetchStatus', () => {
    const state = aboutReducer(undefined, actions.about.request())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHING)
  })

  it('FETCH_ABOUT_SUCCESS updates data', () => {
    const content = ['some text', 'other text']
    const state = aboutReducer(undefined, actions.about.success(content))
    expect(state.data).toEqual(List(content))
  })

  it('FETCH_ABOUT_SUCCESS updates fetchStatus', () => {
    const content = 'some text'
    const state = aboutReducer(undefined, actions.about.success(content))
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHED)
  })

  it('FETCH_ABOUT_FAIL updates fetchStatus', () => {
    const state = aboutReducer(undefined, actions.about.failure())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.ERROR)
  })
})
