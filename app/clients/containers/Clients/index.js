/**
*
* Clients
*
* @flow
*/

import React from 'react'
import { firebaseConnect } from 'firebase-react'

import styles from './Clients.scss'
import Loading from '../../../ui/components/Loading'

import type { Props } from './props'

export const Clients = ({ clients }: Props) => {
  if (!clients) return <Loading text='Loading client list...' />
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

export default firebaseConnect((db, props) => ({
  clients: db.ref('clients'),
}))(Clients)
