/**
*
* IconList Props
*
* @flow
*/

import React from 'react'

import NetworkButton from '../../../card/components/NetworkButton'

export type Props = {
  children?: React.Element<*>,
}

export const networkObjects = [
  {
    type: 'github',
    link: 'https://github.com/shanecav',
  },
  {
    type: 'stackoverflow',
    link: 'http://stackoverflow.com/users/1942085/shane-cavaliere',
  },
  {
    type: 'linkedin',
    link: 'https://linkedin.com/in/shanecavaliere',
  },
  {
    type: 'twitter',
    link: 'https://twitter.com/shanecav',
  },
  {
    type: 'email',
    link: 'mailto:shane@shanecavaliere.com',
  },
]

export const sampleChildren = networkObjects.map((networkProps, i) => (
  <NetworkButton key={i} {...networkProps} />
))

export const sampleProps: Props = {

}
