/**
*
* ProjectInfoIcon Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { ProjectInfoIcon } from './index'
import { sampleProps } from './props'

storiesOf('ProjectInfoIcon', module)
  .add('default', () => {
    return <ProjectInfoIcon {...sampleProps} />
  })
