/**
*
* TabItem
*
* @flow
*/

import React, { Component } from 'react'
import className from 'classnames/bind'

import styles from './TabItem.scss'
const cx = className.bind(styles)

import type { Props } from './props'

export class TabItem extends Component {
  props: Props

  render () {
    return (
      <a className={cx(styles.container, {active: this.props.active})} ref={this.props.refFn} onClick={this.props.updateActiveItem}>
        {React.Children.map(this.props.children, (child) => (
          React.cloneElement(child, {
            active: this.props.active,
          })
        ))}
      </a>
    )
  }
}

export default TabItem
