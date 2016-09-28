// @flow

import { put, call } from 'redux-saga/effects'

import fetchEntity from './fetchEntity'

const entity = {
  request: () => ({}),
  success: () => ({}),
  failure: () => ({}),
}
const apiFn = (): Promise<*> => Promise.resolve()

describe('fetchEntity saga', () => {
  const generator = fetchEntity(entity, apiFn)
  let next = generator.next(entity.request()) // init

  it('first calls apiFn', () => {
    expect(next.value).toEqual(call(apiFn))
  })

  it('if success, dispatches entity.success with result data', () => {
    const result = {data: 'result data'}
    next = generator.next(result) // y1
    expect(next.value).toEqual(put(entity.success(result)))
  })

  it('then finishes', () => {
    next = generator.next() // y2 - return
    expect(next).toEqual({ done: true, value: undefined })
  })

  it('if failure, dispatches entity.failure', () => {
    const newGenerator = fetchEntity(entity, apiFn)
    newGenerator.next(entity.request()) // init
    const thrownValue = newGenerator.throw('error').value // y1 with error
    expect(thrownValue).toEqual(put(entity.failure('error')))
  })
})
