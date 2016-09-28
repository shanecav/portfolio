/**
*
* ProjectTechList Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { ProjectTechList } from './index'
import { sampleProps } from './props'

storiesOf('ProjectTechList', module)
  .add('default', () => {
    return (
      <div style={{padding: 50, backgroundColor: 'white'}}>
        <ProjectTechList {...sampleProps} />
      </div>
    )
  })
