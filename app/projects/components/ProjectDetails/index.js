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

export const ProjectDetails: (props:Props)=>React.Element<*> = ({ project }: Props) => {
  return (
    <div className={styles.container}>
      <ProjectHeading title={project.title} subheading={project.subheading} />

      <Tabs>
        <TabList>
          <ProjectInfoIcon type='desc' text='Description' />
          <ProjectInfoIcon type='tech' text='Tech Stack' />
        </TabList>

        <TabContentList>
          <ProjectInfoWrapper>
            <p>{project.description}</p>
            <h5>My Role:</h5>
            <p>{project.role}</p>
          </ProjectInfoWrapper>

          <ProjectInfoWrapper>
            <ProjectTech server={project.server} client={project.client} />
          </ProjectInfoWrapper>
        </TabContentList>
      </Tabs>
    </div>
  )
}

export default ProjectDetails
