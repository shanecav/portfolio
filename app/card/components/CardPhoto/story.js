/**
*
* CardPhoto Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { CardPhoto } from './index'
import { sampleProps } from './props'

storiesOf('CardPhoto', module)
  .add('default', () => {
    return <CardPhoto {...sampleProps} />
  })
