/**
*
* ProjectHeading
*
* @flow
*/

import React from 'react'

import styles from './ProjectHeading.scss'

import type { Props } from './props'

export const ProjectHeading = ({ title, subheading }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subheading}>{subheading}</h4>
    </div>
  )
}

export default ProjectHeading
