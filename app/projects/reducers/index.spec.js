// @flow

import {
  List,
} from 'immutable'

import projectsReducer, {
  ProjectsState,
} from './'
import * as actions from '../actions'
import FETCH_STATUS from '../../app/constants/fetch-status'
import ProjectRecord from '../records/Project'
import { sampleProps as sampleProjectObj } from '../components/ProjectDetails/props'

describe('projects reducer', () => {
  it('state defaults to an empty ProjectsState', () => {
    const initialState = projectsReducer(undefined, {})
    expect(initialState).toEqual(ProjectsState())
  })

  it('FETCH_PROJECTS_REQUEST updates fetchStatus', () => {
    const state = projectsReducer(undefined, actions.projects.request())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHING)
  })

  it('FETCH_PROJECTS_SUCCESS updates data', () => {
    const projects = [Object.assign({}, sampleProjectObj, {
      image: 'http://d1x6pxn199r2dp.cloudfront.net/images/blockpop.jpg',
    })]
    const state = projectsReducer(undefined, actions.projects.success(projects))
    expect(state.data).toEqual(List([ProjectRecord(projects[0])]))
  })

  it('FETCH_PROJECTS_SUCCESS updates fetchStatus', () => {
    const projects = [Object.assign({}, sampleProjectObj, {
      image: 'http://d1x6pxn199r2dp.cloudfront.net/images/blockpop.jpg',
    })]
    const state = projectsReducer(undefined, actions.projects.success(projects))
    expect(state.fetchStatus).toEqual(FETCH_STATUS.FETCHED)
  })

  it('FETCH_PROJECTS_FAIL updates fetchStatus', () => {
    const state = projectsReducer(undefined, actions.projects.failure())
    expect(state.fetchStatus).toEqual(FETCH_STATUS.ERROR)
  })
})
