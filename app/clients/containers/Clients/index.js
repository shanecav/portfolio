/**
*
* Clients
*
* @flow
*/

import React from 'react'
import { firebaseConnect } from 'firebase-react'

import styles from './Clients.scss'

import type { Props } from './props'

export const Clients: (props:Props)=>React.Element<*> = ({ clients }: Props) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Past Clients</h4>
      <p className={styles.subHeading}>(I worked with some of these clients as a sub-contractor for other agencies)</p>
      <ul className={styles.clientList}>
        {clients && clients.map((client, i) => (
          <li key={i}>{client}</li>
        ))}
      </ul>
    </div>
  )
}

export default firebaseConnect((db, props) => ({
  clients: db.ref('clients'),
}))(Clients)
