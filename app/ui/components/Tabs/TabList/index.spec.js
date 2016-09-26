/**
*
* TabList Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import isEqual from 'lodash/isEqual'

import { TabList } from './index'
import { sampleChildren, sampleProps } from './props'

describe('<TabList />', () => {
  // Snapshots

  it('renders correctly with active set to 0', () => {
    const wrapper = shallow(
      <TabList {...sampleProps} active={0}>
        {sampleChildren}
      </TabList>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with active set to 1', () => {
    const wrapper = shallow(
      <TabList {...sampleProps} active={1}>
        {sampleChildren}
      </TabList>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  // Unit Tests

  it('_activeTabItemRef should set state.activeBg if passed node exists', () => {
    const wrapper = shallow(
      <TabList {...sampleProps}>
        {sampleChildren}
      </TabList>
    )
    const mockNode = {
      offsetTop: 5,
      offsetLeft: 5,
      offsetWidth: 5,
      offsetHeight: 5,
    }
    wrapper.instance()._activeTabItemRef(mockNode)
    expect(wrapper.state('activeBg')).toEqual({
      visible: true,
      top: 5,
      left: 5,
      width: 5,
      height: 5,
    })
  })

  it('_activeTabItemRef should unset state.activeBg if passed node is falsey (i.e. null)', () => {
    const wrapper = shallow(
      <TabList {...sampleProps}>
        {sampleChildren}
      </TabList>
    )
    wrapper.instance()._activeTabItemRef(null)
    expect(wrapper.state('activeBg')).toBe(undefined)
  })

  it('puts its children inside a FlexGroupHorizontal', () => {
    const wrapper = shallow(
      <TabList {...sampleProps}>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const FlexGroupHorizontal = wrapper.find('FlexGroupHorizontal')
    expect(FlexGroupHorizontal.length).toBe(1)
    const children = FlexGroupHorizontal.first().children()
    expect(children.length).toBe(2)
  })

  it('puts its children inside TabItems', () => {
    const wrapper = shallow(
      <TabList {...sampleProps}>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const tabItems = wrapper.find('TabItem')
    expect(tabItems.length).toBe(2)
    expect(tabItems.everyWhere(n => n.find('button').length === 1))
  })

  it('injects active prop (boolean) into TabItem (for each child)', () => {
    const wrapper = shallow(
      <TabList {...sampleProps} active={0}>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const tabItems = wrapper.find('TabItem')
    expect(tabItems.at(0).prop('active')).toBe(true)
    expect(tabItems.at(1).prop('active')).toBe(false)
  })

  it('injects updateActiveItem(i) as updateActiveItem into active TabItem child props', () => {
    const updateActiveItem = jest.fn(() => () => undefined)
    const wrapper = shallow(
      <TabList updateActiveItem={updateActiveItem} active={0}>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const tabItems = wrapper.find('TabItem')
    const allInjected = tabItems.everyWhere((tabItem) => (
      typeof tabItem.prop('updateActiveItem') === 'function'
    ))
    const calledWithIndex = isEqual(updateActiveItem.mock.calls, [[0], [1]])
    expect(allInjected && calledWithIndex).toBe(true)
  })

  it('injects _activeTabItemRef as refFn prop into active TabItem child', () => {
    const wrapper = shallow(
      <TabList {...sampleProps} active={0}>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const _activeTabItemRef = wrapper.instance()._activeTabItemRef
    const tabItems = wrapper.find('TabItem')
    expect(tabItems.at(0).prop('refFn')).toBe(_activeTabItemRef)
    expect(tabItems.at(1).prop('refFn')).toBe(undefined)
  })
})
