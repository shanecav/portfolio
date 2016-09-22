/**
*
* NetworkButton Test
*
* @flow
*/

// TODO: Shouldn't need this mock after upgrading to React 15.4
//       https://github.com/facebook/jest/issues/1353
jest.mock('react-dom')

import React from 'react'
import renderer from 'react-test-renderer'

import { NetworkButton } from './index'
import { sampleProps } from './props'

describe('<NetworkButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <NetworkButton {...sampleProps} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
