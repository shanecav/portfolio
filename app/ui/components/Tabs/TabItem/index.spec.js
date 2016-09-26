/**
*
* TabItem Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { TabItem } from './index'

describe('<TabItem />', () => {
  // Snapshots

  it('active=false renders correctly', () => {
    const wrapper = shallow(
      <TabItem active={false}>
        <span />
      </TabItem>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('active=true renders correctly', () => {
    const wrapper = shallow(
      <TabItem active>
        <span />
      </TabItem>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  // Unit Tests

  it('injects active prop into its child', () => {
    const Child = () => <span />
    const wrapper = shallow(
      <TabItem active>
        <Child />
      </TabItem>
    )
    const child = wrapper.children().first()
    expect(child.prop('active')).toBe(true)
  })

  it('calls updateActiveItem prop on click', () => {
    const updateActiveItem = jest.fn()
    const wrapper = shallow(
      <TabItem updateActiveItem={updateActiveItem} active>
        <span />
      </TabItem>
    )
    wrapper.find('a').simulate('click')
    expect(updateActiveItem.mock.calls.length).toBe(1)
  })
})
