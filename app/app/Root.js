/**
*
* Root
*
* @flow
*/

import React from 'react'

import Header from '../layout/components/Header'
import Card from '../card/containers/Card'

const Root = () => {
  return (
    <div>
      <Header>
        <Card />
      </Header>
    </div>
  )
}

export default Root
