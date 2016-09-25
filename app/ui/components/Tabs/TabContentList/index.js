/**
*
* TabContentList
*
* @flow
*/

import React, { Component } from 'react'
import {
  Motion,
} from 'react-motion'

import spring from '../spring'
import TabContentItem from '../TabContentItem'
import styles from './TabContentList.scss'

import type { Props } from './props'
type State = {
  height: number,
}

export class TabContentList extends Component {
  props: Props
  state: State

  childRefs: Array<*>
  updateHeight: () => void // (see below)

  static defaultProps = {
    height: 'max',
  }

  constructor (props: Props) {
    super(props)
    this.state = {
      height: 0,
    }
    this.childRefs = []
  }

  componentDidMount () {
    window.addEventListener('resize', this._handleResize)
    this._updateHeight(this._getHeight())
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._handleResize)
  }

  componentWillReceiveProps (nextProps: Props) {
    // if the active tab or height prop has changed
    if (nextProps.active !== this.props.active || nextProps.height !== this.props.height) {
      const newHeight = this._getHeight(nextProps)
      // if the height has changed (it may not if props.height==='max')
      if (newHeight !== this.state.height) {
        this._updateHeight(newHeight)
      }
    }
  }

  render () {
    return (
      <Motion style={{
        h: this.props.height === 'current'
           ? spring(this.state.height)
           : this.state.height,
      }}>{({h}) => (

        <div className={styles.container} style={{height: h}}>
          {React.Children.map(this.props.children, (child, i) => {
            // set the position for this child based on its relation to active
            let position
            if (i < this.props.active) {
              position = 'left'
            } else if (i > this.props.active) {
              position = 'right'
            } else {
              position = 'active'
            }
            return (
              <TabContentItem position={position} refFn={this._addToChildRefs}>
                {child}
              </TabContentItem>
            )
          })}
        </div>

      )}</Motion>
    )
  }

  _getHeight = (props: Props = this.props): number => {
    if (props.height === 'max') {
      // max of all childRef heights
      return this.childRefs.reduce((acc, cur) => (
        cur.offsetHeight > acc
        ? cur.offsetHeight
        : acc
      ), 0)
    }
    if (props.height === 'current') {
      // height of the active childRef
      return this.childRefs[props.active || 0]
             ? this.childRefs[props.active || 0].offsetHeight
             : 0
    }
    return this.state.height
  }

  _updateHeight = (height: number) => {
    this.setState({
      height,
    })
  }

  _handleResize = () => {
    const height = this._getHeight()
    if (height !== this.state.height) {
      this._updateHeight(height)
    }
  }

  _addToChildRefs = (node: any) => {
    if (node) {
      this.childRefs.push(node)
    }
  }
}

export default TabContentList
