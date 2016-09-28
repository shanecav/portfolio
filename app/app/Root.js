/**
*
* Root
*
* @flow
*/

import React from 'react'

import Header from '../layout/components/Header'
import Card from '../card/containers/Card'
import Projects from '../projects/containers/Projects'

const Root = () => {
  return (
    <div style={{
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      <Header>
        <Card />
      </Header>
      <Projects />
    </div>
  )
}

export default Root
