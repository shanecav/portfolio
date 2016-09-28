/**
*
* TouchPane Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { TouchPane } from './index'
import { sampleProps } from './props'

describe('<TouchPane />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <TouchPane {...sampleProps}>
        <span>Test</span>
      </TouchPane>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
