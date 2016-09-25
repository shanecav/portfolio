/**
*
* TabItem Test
*
* @flow
*/

// TODO: Shouldn't need this mock after upgrading to React 15.4
//       https://github.com/facebook/jest/issues/1353
jest.mock('react-dom')

import React from 'react'
import renderer from 'react-test-renderer'

import { TabItem } from './index'

describe('<TabItem />', () => {
  it('desc renders correctly', () => {
    const tree = renderer.create(
      <TabItem type='desc-icon' text='Description' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('tech renders correctly', () => {
    const tree = renderer.create(
      <TabItem type='tech-icon' text='Tech Stack' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('tech active renders correctly', () => {
    const tree = renderer.create(
      <TabItem type='tech-icon' text='Tech Stack' active />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
