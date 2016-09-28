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
import Section from '../layout/components/Section'
import About from '../about/containers/About'
import Clients from '../clients/containers/Clients'
import styles from './styles/Root.scss'

const Root = () => {
  return (
    <div className={styles.container}>
      <Header>
        <Card />
      </Header>
      <Projects />
      <Section>
        <About />
      </Section>
      <Section>
        <Clients />
      </Section>
    </div>
  )
}

export default Root
