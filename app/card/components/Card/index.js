/**
*
* Card
*
* @flow
*/

import React from 'react'

import styles from './Card.scss'
// import CardPhoto from '../../components/CardPhoto'
import FlexGroupHorizontal from '../../../ui/components/FlexGroupHorizontal'
import NetworkButton from '../../components/NetworkButton'

import type { Props } from './props'

export const Card = ({ profile }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>
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

export default Card
