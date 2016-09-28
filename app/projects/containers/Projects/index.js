/**
*
* Projects
*
* @flow
*/

import React from 'react'
import { connect } from 'react-redux'

import Project from '../../components/Project'
import { projectsSelector } from '../../selectors'
import styles from './Projects.scss'

import type { Props } from './props'

export const Projects: (props:Props)=>React.Element<*> = ({ projects }: Props) => {
  console.log('Projects', projects)
  return (
    <div className={styles.container}>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}

const mapStateToProps = (state: Object, props: Props) => ({
  projects: projectsSelector(state),
})

export default connect(
  mapStateToProps,
)(Projects)
