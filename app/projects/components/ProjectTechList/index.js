/**
*
* ProjectTechList
*
* @flow
*/

import React from 'react'

import styles from './ProjectTechList.scss'

import type { Props } from './props'

export const ProjectTechList = ({ title, items }: Props) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>"{title}":<br />[</h5>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li className={styles.listItem} key={i}>"{item}"{i < items.length - 1 ? ',' : ''}</li>
        ))}
      </ul>
      <h5 className={styles.title}>]</h5>
    </div>
  )
}

export default ProjectTechList
