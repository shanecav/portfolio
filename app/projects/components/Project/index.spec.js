/**
*
* Project Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Project } from './index'
import { sampleProps, samplePropsPhone } from './props'

describe('<Project />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <Project {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  // Unit Tests

  it('state.open defaults to true when media !== phone', () => {
    const wrapper = shallow(
      <Project {...sampleProps} />
    )
    expect(wrapper.state('open')).toBe(true)
  })

  it('state.open defaults to false when media === phone', () => {
    const wrapper = shallow(
      <Project {...samplePropsPhone} />
    )
    expect(wrapper.state('open')).toBe(false)
  })

  it('state.initialAnimationComplete defaults to false', () => {
    const wrapper = shallow(
      <Project {...sampleProps} />
    )
    expect(wrapper.state('initialAnimationComplete')).toBe(false)
  })

  it('_toggleOpen toggles state.open', () => {
    const wrapper = shallow(
      <Project {...sampleProps} />
    )
    const initialOpen = wrapper.state('open')
    wrapper.instance()._toggleOpen()
    const currentOpen = wrapper.state('open')
    expect(initialOpen).not.toBe(currentOpen)
  })

  it('_setInitialAnimationComplete sets initialAnimationComplete to true if it\'s false', () => {
    const wrapper = shallow(
      <Project {...sampleProps} />
    )
    wrapper.setState({
      initialAnimationComplete: false,
    })
    wrapper.instance()._setInitialAnimationComplete()
    expect(wrapper.state('initialAnimationComplete')).toBe(true)
  })

  it('_setInitialAnimationComplete does nothing it\'s true', () => {
    const wrapper = shallow(
      <Project {...sampleProps} />
    )
    wrapper.setState({
      initialAnimationComplete: true,
    })
    wrapper.instance().setState = jest.fn()
    wrapper.instance()._setInitialAnimationComplete()
    expect(wrapper.instance().setState.mock.calls.length).toBe(0)
  })

  it('_setDetailsInnerRef(node) sets this.detailsInnerNode to node', () => {
    const wrapper = shallow(
      <Project {...sampleProps} />
    )
    const node = {node: 'node'}
    wrapper.instance()._setDetailsInnerRef(node)
    expect(wrapper.instance().detailsInnerNode).toBe(node)
  })
})
