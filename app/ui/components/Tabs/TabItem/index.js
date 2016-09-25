/**
*
* TabItem
*
* @flow
*/

import React, { Component } from 'react'
import className from 'classnames/bind'

import TouchFeedback from '../../TouchFeedback'
import styles from './TabItem.scss'
const cx = className.bind(styles)

import type { Props } from './props'

export class TabItem extends Component {
  props: Props

  render () {
    return (
      <div className={styles.container} ref={this.props.refFn}>
        <TouchFeedback type='rectangle' growth={8} color='#D2C3D8' disabled={this.props.active}>
          <button
            className={cx(styles.button, {active: this.props.active})}
            onClick={this.props.handleClick}
          >
            <span className={cx(styles[this.props.type], styles.icon)}>{this.props.text}</span>
          </button>
        </TouchFeedback>
      </div>
    )
  }
}

export default TabItem
