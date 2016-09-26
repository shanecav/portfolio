/**
*
* ProjectDetails
*
* @flow
*/

import React from 'react'

import ProjectHeading from '../ProjectHeading'
import ProjectInfoIcon from '../ProjectInfoIcon'
import ProjectInfoWrapper from '../ProjectInfoWrapper'
import ProjectTech from '../ProjectTech'
import {
  Tabs,
  TabList,
  TabContentList,
} from '../../../ui/components/Tabs'
import styles from './ProjectDetails.scss'

import type { Props } from './props'

export const ProjectDetails: (props:Props)=>React.Element<*> = ({ title, subheading, description, role, server, client }: Props) => {
  return (
    <div className={styles.container}>
      <ProjectHeading title={title} subheading={subheading} />

      <Tabs>
        <TabList>
          <ProjectInfoIcon type='desc' text='Description' />
          <ProjectInfoIcon type='tech' text='Tech Stack' />
        </TabList>

        <TabContentList>
          <ProjectInfoWrapper>
            <p>{description}</p>
            <h5>My Role:</h5>
            <p>{role}</p>
          </ProjectInfoWrapper>

          <ProjectInfoWrapper>
            <ProjectTech server={server} client={client} />
          </ProjectInfoWrapper>
        </TabContentList>
      </Tabs>
    </div>
  )
}

export default ProjectDetails
