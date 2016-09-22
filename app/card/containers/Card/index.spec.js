/**
*
* Card Test
*
* @flow
*/

// TODO: Shouldn't need this mock after upgrading to React 15.4
//       https://github.com/facebook/jest/issues/1353
jest.mock('react-dom')

import React from 'react'
import renderer from 'react-test-renderer'

import { Card } from './index'
import { sampleProps } from './props'

describe('<Card />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Card {...sampleProps} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
