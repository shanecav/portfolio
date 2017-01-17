/**
*
* About Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { About } from './index'
import { sampleProps } from './props'

describe('<About />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <About {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
