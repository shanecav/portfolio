/**
*
* Projects
*
* @flow
*/

import React from 'react'

import Project from '../../components/Project'
import styles from './Projects.scss'
import StaggeredRise from '../../../ui/components/StaggeredRise'

import type { Props } from './props'

export const Projects = ({ projects }: Props) => {
  return (
    <div className={styles.container}>
      <StaggeredRise>
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </StaggeredRise>
    </div>
  )
}

export default Projects
