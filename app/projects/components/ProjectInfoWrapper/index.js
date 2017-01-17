/**
*
* ProjectInfoWrapper
*
* @flow
*/

import React from 'react'

import styles from './ProjectInfoWrapper.scss'

import type { Props } from './props'

export const ProjectInfoWrapper = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ProjectInfoWrapper
