/**
*
* TouchFeedback Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { TouchFeedback } from './index'

describe('<TouchFeedback />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <TouchFeedback type='ellipse'>
        <button className='test'>Test Button</button>
      </TouchFeedback>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
