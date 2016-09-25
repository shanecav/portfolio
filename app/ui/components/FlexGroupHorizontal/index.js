/**
*
* FlexGroupHorizontal
*
* @flow
*/

import React from 'react'

import styles from './FlexGroupHorizontal.scss'

import type { Props } from './props'

export const FlexGroupHorizontal: (props:Props)=>React.Element<*> = ({ children }: Props) => {
  return (
    <ul className={styles.list}>
      {React.Children.map(children, (child, i) => (
        <li key={i} className={styles.item}>
          {child}
        </li>
      ))}
    </ul>
  )
}

export default FlexGroupHorizontal
