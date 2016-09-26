/**
*
* ProjectTech Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { ProjectTech } from './index'
import { sampleProps } from './props'

describe('<ProjectTech />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectTech {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
