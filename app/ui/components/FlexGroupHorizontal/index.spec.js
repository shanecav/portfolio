/**
*
* FlexGroupHorizontal Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { FlexGroupHorizontal } from './index'
import { sampleProps, sampleChildren } from './props'

describe('FlexGroupHorizontal', () => {
  it('renders correctly when empty', () => {
    const wrapper = shallow(
      <FlexGroupHorizontal {...sampleProps} />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly with children', () => {
    const wrapper = shallow(
      <FlexGroupHorizontal {...sampleProps}>
        {sampleChildren.map(child => child)}
      </FlexGroupHorizontal>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
