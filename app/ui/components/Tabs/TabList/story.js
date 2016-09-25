/**
*
* TabList Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { TabList } from './index'
import { sampleChildren } from './props'

storiesOf('TabList', module)
  .add('active set to 0', () => {
    return (
      <TabList active={0}>
        {sampleChildren}
      </TabList>
    )
  })
  .add('active set to 1', () => {
    return (
      <TabList active={1}>
        {sampleChildren}
      </TabList>
    )
  })
