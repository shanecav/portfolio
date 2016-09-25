/**
*
* NetworkButton Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { NetworkButton } from './index'
import { sampleProps } from './props'

storiesOf('NetworkButton', module)
  .add('github', () => {
    return (
      <div style={{
        display: 'flex',
        padding: 50,
        width: 300,
        justifyContent: 'center',
      }}>
        <NetworkButton {...sampleProps} />
      </div>
    )
  })
