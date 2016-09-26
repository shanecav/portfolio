/**
*
* Tabs Props
*
* @flow
*/

import React from 'react'

import TabList from '../TabList'
import ProjectInfoIcon from '../../../../portfolio/components/ProjectInfoIcon'
import TabContentList from '../TabContentList'

import { sampleProps as tabListSampleProps } from '../TabList/props'

export type Props = {
  initialTab?: number,
  children?: any,
}

export const tabItemProps = [
  {
    type: 'desc',
    text: 'Description',
  },
  {
    type: 'tech',
    text: 'Tech Stack',
  },
]

export const sampleTabList = (
  <TabList {...tabListSampleProps}>
    {tabItemProps.map((props, i) => (
      <ProjectInfoIcon key={i} {...props} />
    ))}
  </TabList>
)

export const sampleTabContentList = (
  <TabContentList>
    <div>
      <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor euismod nulla sit amet venenatis. Ut lobortis lectus id luctus gravida. Aenean euismod aliquet eros, nec fermentum neque auctor vel.</p>
    </div>
    <div>
      <h3>Tech</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </TabContentList>
)

export const sampleProps: Props = {

}
