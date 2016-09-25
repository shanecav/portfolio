/**
*
* TabList Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { TabList } from './index'
import { sampleChildren } from './props'

describe('<TabList />', () => {
  // Snapshots

  it('renders correctly with active set to 0', () => {
    const wrapper = shallow(
      <TabList active={0}>
        {sampleChildren}
      </TabList>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with active set to 1', () => {
    const wrapper = shallow(
      <TabList active={1}>
        {sampleChildren}
      </TabList>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  // Unit Tests

  it('_activeTabItemRef should set state.activeBg if passed node exists', () => {
    const wrapper = shallow(
      <TabList>
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
      <TabList>
        {sampleChildren}
      </TabList>
    )
    wrapper.instance()._activeTabItemRef(null)
    expect(wrapper.state('activeBg')).toBe(undefined)
  })

  it('puts its children inside an FlexGroupHorizontal', () => {
    const wrapper = shallow(
      <TabList>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const FlexGroupHorizontal = wrapper.find('FlexGroupHorizontal').first()
    expect(FlexGroupHorizontal.children().length).toEqual(2)
  })

  it('injects active prop (boolean) into children of FlexGroupHorizontal', () => {
    const wrapper = shallow(
      <TabList active={0}>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const FlexGroupHorizontal = wrapper.find('FlexGroupHorizontal').first()
    expect(FlexGroupHorizontal.childAt(0).prop('active')).toBe(true)
    expect(FlexGroupHorizontal.childAt(1).prop('active')).toBe(false)
  })

  it('injects _activeTabItemRef as refFn prop into active child of FlexGroupHorizontal', () => {
    const wrapper = shallow(
      <TabList active={0}>
        <button>One</button>
        <button>Two</button>
      </TabList>
    )
    const _activeTabItemRef = wrapper.instance()._activeTabItemRef
    const FlexGroupHorizontal = wrapper.find('FlexGroupHorizontal').first()
    expect(FlexGroupHorizontal.childAt(0).prop('refFn')).toBe(_activeTabItemRef)
    expect(FlexGroupHorizontal.childAt(1).prop('refFn')).toBe(undefined)
  })
})
