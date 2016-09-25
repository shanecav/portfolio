/**
*
* TabItem Story
*
* @flow
*/

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { TabItem } from './index'

storiesOf('TabItem', module)
  .add('desc', () => {
    return <TabItem type='desc-icon' text='Description' handleClick={action('TabItem clicked')} />
  })
  .add('tech', () => {
    return <TabItem type='tech-icon' text='Tech Stack' handleClick={action('TabItem clicked')} />
  })
  .add('tech active', () => {
    return <TabItem type='tech-icon' text='Tech Stack' active />
  })
