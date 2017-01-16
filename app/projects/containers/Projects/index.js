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

import type { Props } from './props'

export const Projects: (props:Props)=>React.Element<*> = ({ projects }: Props) => {
  return (
    <div className={styles.container}>
      {projects && projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}

export default firebaseConnect((db, props) => ({
  projects: db.ref('projects'),
}))(Projects)
