/**
*
* FlexGroupHorizontal Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { FlexGroupHorizontal } from './index'
import { sampleProps, sampleChildren } from './props'

storiesOf('FlexGroupHorizontal', module)
  .add('NetworkButtons', () => {
    return (
      <div style={{padding: 50}}>
        <FlexGroupHorizontal {...sampleProps}>
          {sampleChildren}
        </FlexGroupHorizontal>
      </div>
    )
  })
