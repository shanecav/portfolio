/**
*
* Header
*
* @flow
*/

import React from 'react'

import styles from './Header.scss'

import type { Props } from './props'
import Card from '../../../card/containers/Card'

export const Header: (props:Props)=>React.Element<*> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card />
      </div>
    </div>
  )
}

export default Header
