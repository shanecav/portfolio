/**
*
* Projects
*
* @flow
*/

import React from 'react'
import { firebaseConnect } from 'firebase-react'

import Project from '../../components/Project'
import styles from './Projects.scss'
import Loading from '../../../ui/components/Loading'

import type { Props } from './props'

export const Projects = ({ projects }: Props) => {
  if (!projects) return <Loading text='Loading projects...' />
  return (
    <div className={styles.container}>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}

export default firebaseConnect((db, props) => ({
  projects: db.ref('projects'),
}))(Projects)
