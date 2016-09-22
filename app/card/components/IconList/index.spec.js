/**
*
* IconList Test
*
* @flow
*/

// TODO: Shouldn't need this mock after upgrading to React 15.4
//       https://github.com/facebook/jest/issues/1353
jest.mock('react-dom')

import React from 'react'
import renderer from 'react-test-renderer'

import { IconList } from './index'
import { sampleProps, sampleChildren } from './props'

describe('IconList', () => {
  it('renders correctly when empty', () => {
    const tree = renderer.create(
      <IconList {...sampleProps} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with children', () => {
    const tree = renderer.create(
      <IconList {...sampleProps}>
        {sampleChildren.map(child => child)}
      </IconList>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
