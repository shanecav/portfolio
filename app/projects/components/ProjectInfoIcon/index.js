/**
*
* ProjectInfoIcon
*
* @flow
*/

import React from 'react'
import className from 'classnames/bind'

import TouchFeedback from '../../../ui/components/TouchFeedback'
import styles from './ProjectInfoIcon.scss'
const cx = className.bind(styles)

import type { Props } from './props'

export const ProjectInfoIcon: (props:Props)=>React.Element<*> = ({ type, text, active }: Props) => {
  return (
    <TouchFeedback type='rectangle' growth={8} color='#D2C3D8' disabled={active}>
      <span className={cx(styles.inner, {active})}>
        <span className={cx(styles[`${type}-icon`], styles.icon)}>{text}</span>
      </span>
    </TouchFeedback>
  )
}

export default ProjectInfoIcon
