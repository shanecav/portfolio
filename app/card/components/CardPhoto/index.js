/**
*
* CardPhoto
*
* @flow
*/

import React from 'react'

import styles from './CardPhoto.scss'

import type { Props } from './props'

export const CardPhoto: (props:Props)=>React.Element<*> = ({ photoUrl, alt }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={photoUrl} alt={alt} />
    </div>
  )
}

export default CardPhoto
