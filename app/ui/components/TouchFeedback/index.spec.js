/**
*
* TouchFeedback Test
*
* @flow
*/

// TODO: Shouldn't need this mock after upgrading to React 15.4
//       https://github.com/facebook/jest/issues/1353
jest.mock('react-dom')

import React from 'react'
import renderer from 'react-test-renderer'

import { TouchFeedback } from './index'

describe('<TouchFeedback />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TouchFeedback type='ellipse' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
