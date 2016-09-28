/**
*
* TouchPane
*
* @flow
*/

import React from 'react'

import styles from './TouchPane.scss'

import type { Props } from './props'

export const TouchPane: (props:Props)=>React.Element<*> = ({ onTouchEnd, children }: Props) => {
  return (
    <a className={styles.container} onClick={onTouchEnd}>
      {children}
    </a>
  )
}

export default TouchPane
