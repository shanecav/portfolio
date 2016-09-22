/**
*
* IconList Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { IconList } from './index'
import { sampleProps, sampleChildren } from './props'

storiesOf('IconList', module)
  .add('NetworkButtons', () => {
    return (
      <div style={{padding: 50}}>
        <IconList {...sampleProps}>
          {sampleChildren.map(child => child)}
        </IconList>
      </div>
    )
  })
