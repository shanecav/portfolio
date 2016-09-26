/**
*
* ProjectTechList Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { ProjectTechList } from './index'
import { sampleProps } from './props'

describe('<ProjectTechList />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectTechList {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
