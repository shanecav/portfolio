/**
*
* TouchFeedback Story
*
* @flow
*/

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { TouchFeedback } from './index'

storiesOf('TouchFeedback', module)
  .add('square with ellipse', () => {
    return (
      <div style={{padding: 100}}>
        <TouchFeedback>
          <a style={{
            display: 'inline-block',
            width: 50,
            height: 50,
            backgroundColor: 'blue',
          }} />
        </TouchFeedback>
      </div>
    )
  })
  .add('rectangle with a red ellipse', () => {
    return (
      <div style={{padding: 100}}>
        <TouchFeedback color='red'>
          <a style={{
            display: 'inline-block',
            width: 100,
            height: 50,
            backgroundColor: 'blue',
          }} />
        </TouchFeedback>
      </div>
    )
  })
  .add('rectangle with blue rectangle', () => {
    return (
      <div style={{padding: 100}}>
        <TouchFeedback type='rectangle' color='blue'>
          <a style={{
            display: 'inline-block',
            width: 100,
            height: 50,
            backgroundColor: 'blue',
          }} />
        </TouchFeedback>
      </div>
    )
  })
  .add('square with rounded corners', () => {
    return (
      <div style={{padding: 100}}>
        <TouchFeedback type='rectangle' borderRadius={6}>
          <a style={{
            display: 'inline-block',
            width: 50,
            height: 50,
            backgroundColor: 'blue',
            borderRadius: 6,
          }} />
        </TouchFeedback>
      </div>
    )
  })
