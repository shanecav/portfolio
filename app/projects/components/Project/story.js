/**
*
* Project Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Project } from './index'
import { sampleProps, samplePropsPhone } from './props'

storiesOf('Project', module)
  .add('desktop', () => {
    return (
      <div style={{background: 'white'}}>
        <Project {...sampleProps} />
      </div>
    )
  })
  .add('phone', () => {
    return (
      <div style={{background: 'white'}}>
        <Project {...samplePropsPhone} />
      </div>
    )
  })
