/**
*
* TabItem Story
*
* @flow
*/

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { TabItem } from './index'
import ProjectInfoIcon from '../../../../projects/components/ProjectInfoIcon'

storiesOf('TabItem', module)
  .add('desc', () => {
    return (
      <TabItem active={false} handleClick={action('TabItem clicked')}>
        <ProjectInfoIcon type='desc' text='Description' />
      </TabItem>
    )
  })
  .add('tech', () => {
    return (
      <TabItem active={false} handleClick={action('TabItem clicked')}>
        <ProjectInfoIcon type='tech' text='Tech Stack' />
      </TabItem>
    )
  })
  .add('tech active', () => {
    return (
      <TabItem active handleClick={action('TabItem clicked')}>
        <ProjectInfoIcon type='tech' text='Tech Stack' />
      </TabItem>
    )
  })
