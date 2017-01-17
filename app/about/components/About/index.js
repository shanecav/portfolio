/**
*
* About
*
* @flow
*/

import React from 'react'

import styles from './About.scss'
import Loading from '../../../ui/components/Loading'

import type { Props } from './props'

export const About = ({ about }: Props) => {
  if (!about) return <Loading text='Loading bio...' />
  return (
    <div className={styles.container}>
      <h4>About Me</h4>
      {about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export default About
