/**
*
* Header Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Header } from './index'
import { sampleProps } from './props'

describe('<Header />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Header {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
