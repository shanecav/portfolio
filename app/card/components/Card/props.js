/**
*
* Card Props
*
* @flow
*/

import { networkObjects } from '../../../ui/components/FlexGroupHorizontal/props'

import type { Props as Network } from '../../components/NetworkButton/props'

export type Props = {
  profile: {
    name: string,
    photoUrl: string,
    title: string,
    networks: Array<Network>,
  },
}

export const sampleProps: Props = {
  profile: {
    name: 'Shane Cavaliere',
    photoUrl: 'http://d1x6pxn199r2dp.cloudfront.net/images/shanecavaliere-avatar.jpg',
    title: 'full stack developer + designer',
    networks: networkObjects,
  },
}
