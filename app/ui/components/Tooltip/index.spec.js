/**
*
* Tooltip Test
*
* @flow
*/

// TODO: Shouldn't need this mock after upgrading to React 15.4
//       https://github.com/facebook/jest/issues/1353
jest.mock('react-dom')

import React from 'react'
import renderer from 'react-test-renderer'

import { Tooltip } from './index'

describe('<Tooltip />', () => {
  it('renders correctly when hidden', () => {
    const tree = renderer.create(
      <Tooltip show={false} text='Testing Hidden...' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when shown', () => {
    const tree = renderer.create(
      <Tooltip show text='Testing Shown...' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
