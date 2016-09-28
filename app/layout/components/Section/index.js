/**
*
* Section
*
* @flow
*/

import React from 'react'

import styles from './Section.scss'

import type { Props } from './props'

export const Section: (props:Props)=>React.Element<*> = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}

export default Section
