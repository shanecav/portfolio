/**
*
* Header
*
* @flow
*/

import React from 'react'

import styles from './Header.scss'

import type { Props } from './props'

export const Header: (props:Props)=>React.Element<*> = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Header
