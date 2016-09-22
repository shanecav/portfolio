/**
*
* Card
*
* @flow
*/

import React from 'react'
import { connect } from 'react-redux'

import styles from './Card.scss'
import CardPhoto from '../../components/CardPhoto'
import IconList from '../../components/IconList'
import NetworkButton from '../../components/NetworkButton'
import FETCH_STATUS from '../../../app/constants/fetch-status'

import type { Props } from './props'

export const Card: (props:Props)=>React.Element<*> = ({ profile, fetchStatus }: Props) => {
  console.log('Card rendering with profile:', profile)
  if (fetchStatus === FETCH_STATUS.FETCHED) {
    return (
      <div className={styles.container}>
        <div className={styles.cardLeft}>
          <CardPhoto photoUrl={profile.photoUrl} alt={profile.name} />
        </div>
        <div className={styles.cardRight}>
          <h1 className={styles.name}>{profile.name}</h1>
          <h3 className={styles.title}>{profile.title}</h3>
          <IconList>
            {profile.networks.map((network, i) => (
              <NetworkButton key={i} type={network.type} link={network.link} />
            ))}
          </IconList>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container} />
    )
  }
}

const mapStateToProps = (state: Object, props: Props) => ({
  profile: state.getIn(['profile', 'data']),
  fetchStatus: state.getIn(['profile', 'fetchStatus']),
})

export default connect(
  mapStateToProps
)(Card)
