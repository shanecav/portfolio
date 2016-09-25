/**
*
* TabContentList Props
*
* @flow
*/

import React from 'react'

export type Props = {
  active?: number,
  height: 'max' | 'current',
  children?: any,
}

const sampleChildrenData = [
  {
    class: 'first',
    content: 'Test content...',
  },
  {
    class: 'second',
    content: 'More test content...',
  },
]

export const sampleChildren = sampleChildrenData.map((data, i) => (
  <div key={i} className={data.class}>
    <p>{data.content}</p>
  </div>
))

export const sampleProps: Props = {
  active: 0,
  height: 'max',
}
