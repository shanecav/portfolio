/**
*
* Tooltip
*
* @flow
*/

import React from 'react'
import className from 'classnames/bind'
import {
  Motion,
  spring,
} from 'react-motion'

import styles from './Tooltip.scss'
const cx = className.bind(styles)

import type { Props } from './props'

export const Tooltip = ({ show, text }: Props) => {
  return (
    <div className={cx(styles.container, {show})}>
      <Motion
        defaultStyle={{
          y: 8,
          opacity: 0,
          rotateX: -40,
        }}
        style={{
          y: spring(show ? 0 : 8),
          opacity: spring(show ? 0.9 : 0),
          rotateX: spring(show ? 0 : -40),
        }}
      >
        {({y, opacity, rotateX}) =>
          <div className={styles.innerWrapper}>
            <div
              className={styles.inner}
              style={{
                transform: `translate3d(0, ${y}px, 0) rotateX( ${rotateX}deg )`,
                opacity: opacity,
                visibility: (opacity > 0) ? 'visible' : 'hidden',
              }}
            >
              {text}
            </div>
          </div>
        }
      </Motion>
    </div>
  )
}

export default Tooltip
