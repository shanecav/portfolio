/**
*
* Project
*
* @flow
*/

import React from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'

import mediaSelector from '../../../app/selectors/media'
import TouchPane from '../../../ui/components/TouchPane'
import ProjectTitleMobile from '../ProjectTitleMobile'
import ProjectDetails from '../ProjectDetails'
import styles from './Project.scss'

import type { Props } from './props'
type State = {
  open: boolean,
  initialAnimationComplete: boolean,
}

export class Project extends React.Component {
  props: Props
  state: State

  detailsInnerNode: any

  constructor (props: Props) {
    super(props)
    this.state = {
      open: false,
      initialAnimationComplete: false,
    }
  }

  render () {
    const isMobile = this.props.media === 'mobile' || this.props.media === 'mobileWide'

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Motion
            style={{
              s: spring(this.state.open && isMobile ? 1.1 : 1)
            }}
          >{({s}) => (
            <img
              src={this.props.project.image}
              alt={this.props.project.title}
              className={styles.image}
              style={{
                transform: `scale(${s})`,
              }} />
          )}</Motion>
          {isMobile &&
            <TouchPane onTouchEnd={this._toggleOpen}>
              <ProjectTitleMobile
                title={this.props.project.title}
                open={this.state.open} />
            </TouchPane>
          }
        </div>
        {this.props.project &&
          <Motion
            style={{
              h: isMobile
                 ? spring(
                     this.state.open && this.detailsInnerNode
                     ? this.detailsInnerNode.offsetHeight
                     : 0
                   )
                 : -1,
              o: isMobile
                 ? spring(this.state.open ? 1 : 0)
                 : 1,
              y: isMobile
                 ? spring(this.state.open ? 0 : 50)
                 : 0,
            }}
            onRest={this._setInitialAnimationComplete}
          >{({h, o, y}) => (
            <div
              className={styles.detailsContainer}
              style={{
                height: h === -1 ? 'auto' : h,
                opacity: o,
              }}
            >
              <div
                className={styles.detailsInner}
                ref={this._setDetailsInnerRef}
                style={{
                  transform: `translate3d(0, -${y}px, 0)`,
                }}
              >
                <ProjectDetails project={this.props.project} />
              </div>
            </div>
          )}</Motion>
        }
      </div>
    )
  }

  _toggleOpen = () => {
    this.setState(state => ({
      open: !state.open,
    }))
  }

  _setInitialAnimationComplete = () => {
    if (!this.state.initialAnimationComplete) {
      this.setState({
        initialAnimationComplete: true,
      })
    }
  }

  _setDetailsInnerRef = (node: any) => {
    this.detailsInnerNode = node
  }
}

const mapStateToProps = (state: Object, props: Props) => ({
  media: mediaSelector(state),
})

export default connect(
  mapStateToProps
)(Project)
