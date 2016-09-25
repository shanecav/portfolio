/**
*
* TabContentList Test
*
* @flow
*/

import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { TabContentList } from './index'
import { sampleChildren } from './props'

describe('<TabContentList />', () => {
  // Snapshots

  it('active=0 (default height) renders correctly', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('active=1 (default height) renders correctly', () => {
    const wrapper = shallow(
      <TabContentList active={1}>
        {sampleChildren}
      </TabContentList>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('height=current renders correctly', () => {
    const wrapper = shallow(
      <TabContentList active={0} height='current'>
        {sampleChildren}
      </TabContentList>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  // Unit Tests

  it('state initializes with height: 0', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    expect(wrapper.state('height')).toEqual(0)
  })

  it('it initializes with this.childRefs = []', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    expect(wrapper.instance().childRefs).toEqual([])
  })

  it('_updateHeight should update state.height with its arg', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance._updateHeight(123)
    expect(wrapper.state('height')).toBe(123)
  })

  it('_getHeight uses max childRef offsetHeight when props.height=max', () => {
    const wrapper = shallow(
      <TabContentList active={0} height='max'>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance.childRefs = [{offsetHeight: 1}, {offsetHeight: 3}, {offsetHeight: 2}]
    expect(instance._getHeight()).toBe(3)
  })

  it('_getHeight uses active childRef offsetHeight when props.height=current', () => {
    const wrapper = shallow(
      <TabContentList active={2} height='current'>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance.childRefs = [{offsetHeight: 1}, {offsetHeight: 3}, {offsetHeight: 2}]
    expect(instance._getHeight()).toBe(2)
  })

  it('_handleResize updates state.height if height changed', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    wrapper.setState({height: 4})
    // replace _getHeight so it simply returns 5 (!== current state.height)
    instance._getHeight = () => 5
    instance._handleResize()
    expect(wrapper.state('height')).toBe(5)
  })

  it('_handleResize doesn\'t update state.height if height unchanged', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    wrapper.setState({height: 4})
    // replace _getHeight so it simply returns 5 (!== current state.height)
    instance._getHeight = () => 4
    instance._updateHeight = jest.fn()
    instance._handleResize()
    // height hasn't changed, so we expect _updateHeight not to have been called
    expect(instance._updateHeight.mock.calls.length).toBe(0)
  })

  it('_addToChildRefs adds node to childRefs if node exists', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance._addToChildRefs({offsetHeight: 1})
    expect(instance.childRefs).toEqual([{offsetHeight: 1}])
  })

  it('_addToChildRefs does nothing if node is falsey (i.e. null)', () => {
    const wrapper = shallow(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance._addToChildRefs(null)
    expect(instance.childRefs).toEqual([])
  })

  it('adds resize listener on componentDidMount', () => {
    window.addEventListener = jest.fn()
    const wrapper = mount(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    const _handleResize = instance._handleResize
    instance.componentDidMount()
    expect(window.addEventListener.mock.calls[1][0]).toBe('resize')
    expect(window.addEventListener.mock.calls[1][1]).toBe(_handleResize)
  })

  it('calls _updateHeight with _getHeight() on componentDidMount', () => {
    const wrapper = mount(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance._getHeight = jest.fn(() => 5)
    instance._updateHeight = jest.fn()
    instance.componentDidMount()
    expect(instance._getHeight.mock.calls.length).toBe(1)
    expect(instance._updateHeight.mock.calls.length).toBe(1)
    expect(instance._updateHeight.mock.calls[0]).toEqual([5])
  })

  it('removes resize listener on componentWillUnmount', () => {
    window.removeEventListener = jest.fn()
    const wrapper = mount(
      <TabContentList active={0}>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    const _handleResize = instance._handleResize
    instance.componentWillUnmount()
    expect(window.removeEventListener.mock.calls[0][0]).toBe('resize')
    expect(window.removeEventListener.mock.calls[0][1]).toBe(_handleResize)
  })

  it('doesn\'t recalc/set height if new active & height props unchanged', () => {
    const wrapper = mount(
      <TabContentList active={0} height='max'>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance._getHeight = jest.fn()
    instance._updateHeight = jest.fn()
    wrapper.setProps({active: 0, height: 'max'})
    expect(instance._getHeight.mock.calls.length).toBe(0)
    expect(instance._updateHeight.mock.calls.length).toBe(0)
  })

  it('componentWillReceiveProps doesn\'t _updateHeight if height unchanged', () => {
    const wrapper = mount(
      <TabContentList active={0} height='max'>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance._getHeight = jest.fn(() => 5)
    instance._updateHeight = jest.fn()
    wrapper.setState({height: 5})
    wrapper.setProps({active: 1, height: 'max'})
    expect(instance._updateHeight.mock.calls.length).toBe(0)
  })

  it('calls _updateHeight if new active or height props changed, and height changed', () => {
    const wrapper = mount(
      <TabContentList active={0} height='max'>
        {sampleChildren}
      </TabContentList>
    )
    const instance = wrapper.instance()
    instance._getHeight = jest.fn(() => 5)
    instance._updateHeight = jest.fn()
    wrapper.setState({height: 10})
    wrapper.setProps({active: 1, height: 'max'})
    expect(instance._getHeight.mock.calls.length).toBe(1)
    expect(instance._updateHeight.mock.calls.length).toBe(1)
    expect(instance._updateHeight.mock.calls[0]).toEqual([5])
  })

  it('wraps children in .container > TabContentItem', () => {
    const wrapper = shallow(
      <TabContentList active={0} height='max'>
        <div className='first'>
          <p>Test content...</p>
        </div>
        <div className='second'>
          <p>More test content...</p>
        </div>
      </TabContentList>
    )
    const children = wrapper.children()
    expect(children.everyWhere((child) => (
      child.hasClass('container') && child.find('TabContentItem').length === 1
    )))
  })
})
