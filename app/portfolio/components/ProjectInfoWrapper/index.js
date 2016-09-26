/**
*
* ProjectInfoWrapper
*
* @flow
*/

import React from 'react'

import styles from './ProjectInfoWrapper.scss'

import type { Props } from './props'

export const ProjectInfoWrapper: (props:Props)=>React.Element<*> = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ProjectInfoWrapper
