/**
*
* NetworkButton Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { NetworkButton } from './index'
import { sampleProps } from './props'

describe('<NetworkButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <NetworkButton {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
