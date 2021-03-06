/**
*
* TabList
*
* @flow
*/

import React, { Component } from 'react'
import {
  Motion,
} from 'react-motion'

import spring from '../spring'
import FlexGroupHorizontal from '../../FlexGroupHorizontal'
import TabItem from '../TabItem'
import styles from './TabList.scss'

type TabItemNode = {
  offsetTop: number,
  offsetLeft: number,
  offsetWidth: number,
  offsetHeight: number,
}
import type { Props } from './props'
type State = {
  activeBg: {
    visible: boolean,
    top: number,
    left: number,
    width: number,
    height: number,
  },
}

export class TabList extends Component {
  props: Props
  state: State

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.listContainer}>
          <FlexGroupHorizontal>
            {React.Children.map(this.props.children, (child, i) => {
              const active = i === this.props.active
              return (
                <TabItem
                  key={i}
                  active={active}
                  updateActiveItem={this.props.updateActiveItem && this.props.updateActiveItem(i)}
                  refFn={active ? this._activeTabItemRef : undefined}
                >
                  {child}
                </TabItem>
              )
            })}
          </FlexGroupHorizontal>
        </div>
        {this.state && this.state.activeBg &&
          <Motion
            style={{
              x: spring(this.state.activeBg.left),
              y: spring(this.state.activeBg.top),
              w: spring(this.state.activeBg.width),
              h: spring(this.state.activeBg.height),
            }}
          >
            {({x, y, w, h}) => (
              <div className={styles.activeBg} style={{
                transform: `translate3d(${x}px, ${y}px, 0) scale(${w}, ${h})`,
              }} />
            )}
          </Motion>
        }
      </div>
    )
  }

  _activeTabItemRef = (node: TabItemNode) => {
    if (node) {
      this.setState({
        activeBg: {
          visible: true,
          top: node.offsetTop,
          left: node.offsetLeft,
          width: node.offsetWidth,
          height: node.offsetHeight,
        },
      })
    } else {
      this.setState({
        activeBg: undefined,
      })
    }
  }
}

export default TabList
