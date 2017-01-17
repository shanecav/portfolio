/**
*
* Root
*
* @flow
*/

import React from 'react'
import { firebaseConnect } from 'firebase-react'

import Header from '../layout/components/Header'
import Card from '../card/components/Card'
import Projects from '../projects/components/Projects'
import Section from '../layout/components/Section'
import About from '../about/components/About'
import Clients from '../clients/components/Clients'
import styles from './styles/Root.scss'
import Footer from '../layout/components/Footer'
import Loading from '../ui/components/Loading'
import StaggeredRise from '../ui/components/StaggeredRise'

type Props = {
  about?: *,
  clients?: *,
  profile?: *,
  projects?: *,
}

class Root extends React.Component {
  props: Props

  render () {
    const {about, clients, profile, projects} = this.props

    if (about && clients && profile && projects) {
      return (
        <div className={styles.container}>
          <StaggeredRise>
            <Header><Card profile={profile} /></Header>
            <Projects projects={projects} />
            <Section><About about={about} /></Section>
            <Section><Clients clients={clients} /></Section>
            <Footer />
          </StaggeredRise>
        </div>
      )
    }
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    )
  }
}

export default firebaseConnect((db, props) => ({
  about: db.ref('about'),
  clients: db.ref('clients'),
  profile: db.ref('profile'),
  projects: db.ref('projects'),
}))(Root)
