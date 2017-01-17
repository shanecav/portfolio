/**
*
* Clients Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Clients } from './index'
import { sampleProps } from './props'

describe('<Clients />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <Clients {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
