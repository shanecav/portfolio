/**
*
* CardPhoto Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { CardPhoto } from './index'
import { sampleProps } from './props'

describe('<CardPhoto />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CardPhoto {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
