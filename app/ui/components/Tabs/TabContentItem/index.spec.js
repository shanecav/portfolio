/**
*
* TabContentItem Test
*
* @flow
*/

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { TabContentItem } from './index'

describe('<TabContentItem />', () => {
  it('position=left renders correctly', () => {
    const wrapper = shallow(
      <TabContentItem position='left'>
        <div className='test'>
          <p>Test content...</p>
        </div>
      </TabContentItem>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('position=active renders correctly', () => {
    const wrapper = shallow(
      <TabContentItem position='active'>
        <div className='test'>
          <p>Test content...</p>
        </div>
      </TabContentItem>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('position=right renders correctly', () => {
    const wrapper = shallow(
      <TabContentItem position='right'>
        <div className='test'>
          <p>Test content...</p>
        </div>
      </TabContentItem>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
