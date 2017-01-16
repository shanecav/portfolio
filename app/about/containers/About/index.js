/**
*
* About
*
* @flow
*/

import React from 'react'
import { firebaseConnect } from 'firebase-react'

import styles from './About.scss'

import type { Props } from './props'

export const About: (props:Props)=>React.Element<*> = ({ about }: Props) => {
  return (
    <div className={styles.container}>
      <h4>About Me</h4>
      {about && about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export default firebaseConnect((db, props) => ({
  about: db.ref('about'),
}))(About)
