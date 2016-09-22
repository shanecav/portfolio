/**
*
* TouchFeedback
*
* @flow
*/

import React, { Component, PropTypes } from 'react'
import {
  Motion,
  spring,
} from 'react-motion'
import without from 'lodash/without'

type State = {
  node: {
    width: number,
    height: number,
  },
  taps: Array<number>,
}

export class TouchFeedback extends Component {
  state: State

  constructor (props: Object) {
    super(props)
    this.state = {
      node: {
        width: 0,
        height: 0,
      },
      taps: [],
    }
  }

  static propTypes = {
    type: PropTypes.oneOf(['ellipse', 'rectangle']),
    url: PropTypes.string,
    growth: PropTypes.number,
    color: PropTypes.string,
    borderRadius: PropTypes.number,
    disabled: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    type: 'ellipse',
    growth: 12,
    color: 'black',
    borderRadius: 0,
    disabled: false,
  }

  render () {
    return (
      <span
        onTouchEnd={this._handleTouch}
        ref={this._saveRef}
        style={{
          display: 'inline-block',
          position: 'relative',
          fontSize: 0,
          lineHeight: 0,
        }}
      >
        {this.props.children}
        {this.state.node.width && this.state.node.height && this.state.taps.map((ts) => {
          const cx = (this.state.node.width + (this.props.growth * 2)) / 2
          const cy = (this.state.node.height + (this.props.growth * 2)) / 2
          return (
            <Motion
              defaultStyle={{
                growth: 1,
                opacity: 1,
              }}
              style={{
                growth: spring(this.props.growth),
                opacity: spring(0),
              }}
              onRest={this._handleAnimationEnd(ts)}
              key={ts}
            >
              {({growth, opacity}) =>
                <svg
                  width={this.state.node.width + this.props.growth * 2}
                  height={this.state.node.height + this.props.growth * 2}
                  viewBox={`0 0 ${(this.state.node.width + this.props.growth * 2).toString()} ${(this.state.node.height + this.props.growth * 2).toString()}`}
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{
                    position: 'absolute',
                    top: -this.props.growth,
                    right: -this.props.growth,
                    bottom: -this.props.growth,
                    left: -this.props.growth,
                    zIndex: 101,
                  }}
                >
                  {(this.props.type === 'ellipse') &&
                    <ellipse
                      cx={cx}
                      cy={cy}
                      rx={(this.state.node.width / 2 + growth).toString()}
                      ry={(this.state.node.height / 2 + growth).toString()}
                      fill='none'
                      stroke={this.props.color}
                      style={{
                        opacity: opacity,
                      }} />
                  }
                  {(this.props.type === 'rectangle') &&
                    <rect
                      x={this.props.growth - growth}
                      y={this.props.growth - growth}
                      width={(this.state.node.width + growth * 2).toString()}
                      height={(this.state.node.height + growth * 2).toString()}
                      rx={this.props.borderRadius}
                      ry={this.props.borderRadius}
                      fill='none'
                      stroke={this.props.color}
                      style={{
                        opacity: opacity,
                      }} />
                  }
                </svg>
              }
            </Motion>
          )
        })}
      </span>
    )
  }

  _saveRef = (node: any) => {
    if (node) {
      this.setState({
        node: {
          width: node.offsetWidth,
          height: node.offsetHeight,
        }
      })
    }
  }

  _handleAnimationEnd = (ts: number) => () => {
    this.setState((state) => ({
      taps: without(state.taps, ts),
    }))
  }

  _handleTouch = () => {
    if (!this.props.disabled) {
      if (this.props.url) {
        setTimeout(() => { window.location = this.props.url }, 300)
      }
      this.setState((state) => ({
        taps: state.taps.concat(Date.now()),
      }))
    }
  }
}

export default TouchFeedback
