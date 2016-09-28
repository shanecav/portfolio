/**
*
* Section Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Section } from './index'

describe('<Section />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <Section>
        <p>Sample content...</p>
      </Section>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
