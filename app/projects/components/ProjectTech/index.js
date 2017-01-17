/**
*
* ProjectTech
*
* @flow
*/

import React from 'react'

import ProjectTechList from '../ProjectTechList'
import styles from './ProjectTech.scss'

import type { Props } from './props'

export const ProjectTech = ({ server, client }: Props) => {
  return (
    <div className={styles.container}>
      <ProjectTechList title='Server/API' items={server} />
      <ProjectTechList title='Client' items={client} />
    </div>
  )
}

export default ProjectTech
