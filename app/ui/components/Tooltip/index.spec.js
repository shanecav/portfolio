/**
*
* Tooltip Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Tooltip } from './index'

describe('<Tooltip />', () => {
  it('renders correctly when hidden', () => {
    const wrapper = shallow(
      <Tooltip show={false} text='Testing Hidden...' />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly when shown', () => {
    const wrapper = shallow(
      <Tooltip show text='Testing Shown...' />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
