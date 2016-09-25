/**
*
* Tabs
*
* @flow
*/

import React, { Component } from 'react'

import TabList from '../TabList'
import TabContentList from '../TabContentList'
import styles from './Tabs.scss'

import type { Props } from './props'
type State = {
  active: number,
}

export class Tabs extends Component {
  props: Props
  state: State

  constructor (props: Props) {
    super(props)
    this.state = {
      active: props.initialTab || 0,
    }
  }

  render () {
    return (
      <div className={styles.container}>
        {React.Children.map(this.props.children,
          (child) => {
            // inject active into TabList child and inject _updateActiveItem
            // into all children of TabList child:
            //
            // if this child is a TabList...
            if (child.type === TabList) {
              return React.cloneElement(child, {
                // set the TabList's active prop according to this.state...
                active: this.state.active,
                // go through each of TabList's children...
                children: child.props.children.map((tabListChild, i) => {
                  // and inject _updateActiveItem (with this child's index)
                  return React.cloneElement(tabListChild, {
                    handleClick: this._updateActiveItem(i),
                  })
                }),
              })
            }
            // inject active into TabContentList child:
            //
            // if this child is a TabContentList...
            if (child.type === TabContentList) {
              return React.cloneElement(child, {
                // set the TabContentList's 'active' prop according to this.state
                active: this.state.active,
              })
            }
          }
        )}
      </div>
    )
  }

  _updateActiveItem = (i: number) => (e: any) => {
    if (e.type === 'click') {
      e.currentTarget.blur()
    }
    if (this.state.active !== i) {
      this.setState({
        active: i,
      })
    }
  }
}

export default Tabs
