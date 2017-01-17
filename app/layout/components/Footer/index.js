/**
*
* Footer
*
* @flow
*/

import React from 'react'

import styles from './Footer.scss'

import type { Props } from './props'

export const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.copyright}>©{new Date().getFullYear()} Shane Cavaliere</h5>
      <p><a className={styles.link} href='https://github.com/shanecav/portfolio'>View this site's code on GitHub</a></p>
    </div>
  )
}

export default Footer
