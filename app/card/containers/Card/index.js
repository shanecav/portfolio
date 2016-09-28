/**
*
* Card
*
* @flow
*/

import React from 'react'
import { connect } from 'react-redux'

import styles from './Card.scss'
// import CardPhoto from '../../components/CardPhoto'
import FlexGroupHorizontal from '../../../ui/components/FlexGroupHorizontal'
import NetworkButton from '../../components/NetworkButton'
import { profileSelector } from '../../selectors'

import type { Props } from './props'

export const Card: (props:Props)=>React.Element<*> = ({ profile, fetchStatus }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        {/* <div className={styles.badgeLeft}>
          <CardPhoto photoUrl={profile.photoUrl} alt={profile.name} />
        </div> */}
        <div className={styles.badgeRight}>
          <h1 className={styles.name}>{profile.name}</h1>
          <h3 className={styles.title}>{profile.title}</h3>
        </div>
      </div>
      <div className={styles.networks}>
        <FlexGroupHorizontal>
          {profile.networks.map((network, i) => (
            <NetworkButton key={i} type={network.type} link={network.link} />
          ))}
        </FlexGroupHorizontal>
      </div>
    </div>
  )
}

const mapStateToProps = (state: Object, props: Props) => ({
  profile: profileSelector.data(state),
  fetchStatus: profileSelector.fetchStatus(state),
})

export default connect(
  mapStateToProps
)(Card)
