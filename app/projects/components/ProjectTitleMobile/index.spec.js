/**
*
* ProjectTitleMobile Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { ProjectTitleMobile } from './index'
import { sampleProps } from './props'

describe('<ProjectTitleMobile />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <ProjectTitleMobile {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
