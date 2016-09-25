/**
*
* Tabs Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import TabContentList from '../TabContentList'
import { Tabs } from './index'
import { sampleProps, sampleTabList, sampleTabContentList } from './props'

storiesOf('Tabs', module)
  .add('default: height=max', () => {
    return (
      <div style={{
        padding: 50,
        background: 'white',
      }}>
        <Tabs {...sampleProps}>
          {sampleTabList}
          {sampleTabContentList}
        </Tabs>
      </div>
    )
  })
  .add('height=current', () => {
    return (
      <div style={{
        padding: 50,
        background: 'white',
      }}>
        <Tabs {...sampleProps}>
          {sampleTabList}
          <TabContentList height='current'>
            <div>
              <h3>Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor euismod nulla sit amet venenatis. Ut lobortis lectus id luctus gravida. Aenean euismod aliquet eros, nec fermentum neque auctor vel.</p>
            </div>
            <div>
              <h3>Tech</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </TabContentList>
        </Tabs>
      </div>
    )
  })
  .add('initialTab=1', () => {
    return (
      <div style={{
        padding: 50,
        background: 'white',
      }}>
        <Tabs initialTab={1}>
          {sampleTabList}
          {sampleTabContentList}
        </Tabs>
      </div>
    )
  })
