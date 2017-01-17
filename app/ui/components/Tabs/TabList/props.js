/**
*
* TabList Props
*
* @flow
*/

import React from 'react'

import ProjectInfoIcon from '../../../../projects/components/ProjectInfoIcon'

export type Props = {
  active?: number,
  updateActiveItem?: (i: number) => (e: any) => void,
  children?: React.Element<*>,
}

export const sampleProps = {
  updateActiveItem: () => () => undefined,
}

export const tabItemProps = [
  {
    type: 'desc',
    text: 'Description',
    active: true,
  },
  {
    type: 'tech',
    text: 'Tech Stack',
    active: false,
  },
]

export const sampleChildren = tabItemProps.map((props, i) => (
  <ProjectInfoIcon key={i} type={props.type} text={props.text} />
))
