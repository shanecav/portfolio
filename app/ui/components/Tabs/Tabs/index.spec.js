/**
*
* Tabs Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import TabContentList from '../TabContentList'
import { Tabs } from './index'
import { sampleProps, sampleTabList, sampleTabContentList } from './props'

describe('<Tabs /> snapshots', () => {
  // Snapshots

  it('height=max renders correctly', () => {
    const wrapper = shallow(
      <Tabs {...sampleProps}>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('height=current renders correctly', () => {
    const wrapper = shallow(
      <Tabs {...sampleProps}>
        {sampleTabList}
        <TabContentList height='current'>
          <div>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h3>Tech</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </TabContentList>
      </Tabs>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('initialTab=1 renders correctly', () => {
    const wrapper = shallow(
      <Tabs initialTab={1}>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  // Unit Tests

  it('state.active should default to 0', () => {
    const wrapper = shallow(
      <Tabs>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    expect(wrapper.state('active')).toEqual(0)
  })

  it('initialTab prop should set initial state.active', () => {
    const wrapper = shallow(
      <Tabs initialTab={1}>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    expect(wrapper.state('active')).toEqual(1)
  })

  it('_updateActiveItem method sets state.active', () => {
    const wrapper = shallow(
      <Tabs>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    expect(wrapper.state('active')).toEqual(0)
    wrapper.instance()._updateActiveItem(1)({type: 'fakeEvent'})
    expect(wrapper.state('active')).toEqual(1)
  })

  it('injects active prop into TabList child from state.active', () => {
    const wrapper = shallow(
      <Tabs>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    const tabListChild = wrapper.find('TabList').first()
    expect(tabListChild.prop('active')).toEqual(wrapper.state('active'))
  })

  it('injects active prop into TabContentList child from state.active', () => {
    const wrapper = shallow(
      <Tabs>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    const tabListChild = wrapper.find('TabContentList').first()
    expect(tabListChild.prop('active')).toEqual(wrapper.state('active'))
  })

  it('does not inject active prop into non-TabList & non-TabContentList children', () => {
    const OtherChild = () => <div />
    const wrapper = shallow(
      <Tabs>
        {sampleTabList}
        {sampleTabContentList}
        <OtherChild />
        <OtherChild />
      </Tabs>
    )
    const otherChildren = wrapper.findWhere((child) => (
      child.not('TabList') && child.not('TabContentList')
    ))
    expect(otherChildren.everyWhere(child => child.prop('active') === undefined))
  })

  it('injects _updateActiveItem as prop handleClick into TabList>TabItem children', () => {
    const wrapper = shallow(
      <Tabs>
        {sampleTabList}
        {sampleTabContentList}
      </Tabs>
    )
    const _updateActiveItem = wrapper.instance()._updateActiveItem
    const tabItemChildren = wrapper.find('TabList').first().find('TabItem')
    expect(tabItemChildren.everyWhere(child => child.prop('handleClick') === _updateActiveItem))
  })
})
