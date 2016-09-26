/**
*
* ProjectDetails Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { ProjectDetails } from './index'
import { sampleProps } from './props'

describe('<ProjectDetails />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectDetails {...sampleProps} />
    )
    // expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
