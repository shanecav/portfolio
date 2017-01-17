/**
*
* ProjectTitleMobile
*
* @flow
*/

import React from 'react'
import className from 'classnames/bind'
import {
  Motion,
  spring,
} from 'react-motion'

import styles from './ProjectTitleMobile.scss'
const cx = className.bind(styles)

import type { Props } from './props'

export const ProjectTitleMobile = ({ title, open }: Props) => {
  return (
    <h3 className={cx(styles.container, {open: open})}>
      {title}
      <Motion
        style={{
          r: spring(open ? 180 : 0)
        }}
      >{({r}) => (
        <span
          className={cx(styles.inlineIcon, styles.caret)}
          style={{
            transform: `rotate(${r}deg)`,
          }} />
      )}</Motion>
    </h3>
  )
}

export default ProjectTitleMobile
