/**
*
* Tabs Props
*
* @flow
*/

import React from 'react'

import TabItem from '../TabItem'
import TabList from '../TabList'
import TabContentList from '../TabContentList'

export type Props = {
  initialTab?: number,
  children?: any,
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

export const sampleTabList = (
  <TabList>
    {tabItemProps.map((props, i) => (
      <TabItem key={i} {...props} />
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
