/**
*
* Footer Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Footer } from './index'
import { sampleProps } from './props'

describe('<Footer />', () => {
  // Snapshots

  it('renders correctly', () => {
    const wrapper = shallow(
      <Footer {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
