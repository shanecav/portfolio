/**
*
* ProjectTech Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { ProjectTech } from './index'
import { sampleProps } from './props'

storiesOf('ProjectTech', module)
  .add('default', () => {
    return (
      <div style={{padding: 50, backgroundColor: 'white'}}>
        <ProjectTech {...sampleProps} />
      </div>
    )
  })
