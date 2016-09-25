/**
*
* TabList Props
*
* @flow
*/

import React from 'react'

import TabItem from '../TabItem'

export type Props = {
  active?: number,
  children?: React.Element<*>,
}

export const tabItemProps = [
  {
    type: 'desc-icon',
    text: 'Description',
    active: true,
  },
  {
    type: 'tech-icon',
    text: 'Tech Stack',
  },
]

export const sampleChildren = tabItemProps.map((props, i) => (
  <TabItem key={i} {...props} />
))

export const sampleProps: Props = {
  active: 0,
}
