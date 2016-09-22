/**
*
* Card Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Card } from './index'
import { sampleProps } from './props'

storiesOf('Card', module)
  .add('default', () => {
    return <Card {...sampleProps} />
  })
