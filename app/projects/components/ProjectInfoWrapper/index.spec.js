/**
*
* ProjectInfoWrapper Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { ProjectInfoWrapper } from './index'
import { sampleProps } from './props'

describe('<ProjectInfoWrapper />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectInfoWrapper {...sampleProps}>
        <span>Child</span>
      </ProjectInfoWrapper>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
