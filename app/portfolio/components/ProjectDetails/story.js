/**
*
* ProjectDetails Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { ProjectDetails } from './index'
import { sampleProps } from './props'

storiesOf('ProjectDetails', module)
  .add('default', () => {
    return (
      <div style={{padding: 50, backgroundColor: 'white'}}>
        <ProjectDetails {...sampleProps} />
      </div>
    )
  })
