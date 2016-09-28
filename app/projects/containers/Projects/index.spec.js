/**
*
* Projects Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Projects } from './index'
import { sampleProps } from './props'

describe('<Projects />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <Projects {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
