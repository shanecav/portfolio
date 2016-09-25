/**
*
* TabContentItem
*
* @flow
*/

import React, { Component } from 'react'
import {
  Motion,
} from 'react-motion'

import spring from '../spring'
import styles from './TabContentItem.scss'

import type { Props } from './props'

export class TabContentItem extends Component {
  props: Props

  render () {
    const delta = 50
    // set the offset for this child based on its relation to active
    let xOffset: number
    switch (this.props.position) {
      case 'active':
        xOffset = 0
        break
      case 'left':
        xOffset = -delta
        break
      case 'right':
        xOffset = delta
        break
    }

    return (
      <Motion
        style={{
          x: spring(xOffset),
          opacity: spring(this.props.position === 'active' ? 1 : 0),
        }}
      >{({x, opacity}) => (

        <div
          className={styles.container}
          style={{
            transform: `translate3d(${x}px, 0, 0)`,
            opacity,
            visibility: (opacity > 0) ? 'visible' : 'hidden',
          }}
        >
          <div
            ref={this.props.refFn}
            className={styles.inner}
          >
            {this.props.children}
          </div>
        </div>

      )}</Motion>
    )
  }
}

export default TabContentItem
