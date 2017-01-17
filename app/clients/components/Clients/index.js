/**
*
* Clients
*
* @flow
*/

import React from 'react'

import styles from './Clients.scss'

import type { Props } from './props'

export const Clients = ({ clients }: Props) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Past Clients</h4>
      <p className={styles.subHeading}>(I worked with some of these clients as a sub-contractor for other agencies)</p>
      <ul className={styles.clientList}>
        {clients.map((client, i) => (
          <li key={i}>{client}</li>
        ))}
      </ul>
    </div>
  )
}

export default Clients
