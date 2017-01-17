/**
*
* Card Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Card } from './index'
import { sampleProps } from './props'

describe('<Card />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Card {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
