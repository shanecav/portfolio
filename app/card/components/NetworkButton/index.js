/**
*
* NetworkButton
*
* @flow
*/

import React, { Component } from 'react'
import className from 'classnames/bind'

import Tooltip from '../../../ui/components/Tooltip'
import TouchFeedback from '../../../ui/components/TouchFeedback'
import styles from './NetworkButton.scss'
const cx = className.bind(styles)

import type { Props } from './props'
type State = {
  showTooltip: boolean,
}

export class NetworkButton extends Component {
  props: Props
  state: State

  constructor (props: Props) {
    super(props)
    this.state = {
      showTooltip: false,
    }
  }

  render () {
    const tooltipText = (this.props.type === 'email')
      ? this.props.link.replace('mailto:', '')
      : this.props.link.replace(/^https?:\/\//, '')

    return (
      <div className={styles.container}>
        <TouchFeedback growth={8} url={this.props.link}>
          <a
            className={styles.link}
            href={this.props.link}
            onMouseEnter={this._handleMouseEnter}
            onMouseLeave={this._handleMouseLeave}
            onFocus={this._handleMouseEnter}
            onBlur={this._handleMouseLeave}
          >
            <span className={cx(styles[this.props.type], styles.icon)}>{tooltipText}</span>
          </a>
        </TouchFeedback>
        <Tooltip show={this.state.showTooltip} text={tooltipText} />
      </div>
    )
  }

  _handleMouseEnter = () => {
    this.setState({
      showTooltip: true,
    })
  }

  _handleMouseLeave = () => {
    this.setState({
      showTooltip: false,
    })
  }
}

export default NetworkButton
