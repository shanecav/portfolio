/**
*
* ProjectHeading Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { ProjectHeading } from './index'
import { sampleProps } from './props'

describe('<ProjectHeading />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectHeading {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
