/**
*
* About
*
* @flow
*/

import React from 'react'
import { connect } from 'react-redux'

import { aboutSelector } from '../../selectors'
import styles from './About.scss'

import type { Props } from './props'

export const About: (props:Props)=>React.Element<*> = ({ about }: Props) => {
  return (
    <div className={styles.container}>
      <h4>About Me</h4>
      {about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

const mapStateToProps = (state: Object, props: Props) => ({
  about: aboutSelector.data(state),
  fetchStatus: aboutSelector.fetchStatus(state),
})

export default connect(
  mapStateToProps,
)(About)
