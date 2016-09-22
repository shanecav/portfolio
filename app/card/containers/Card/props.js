/**
*
* Card Props
*
* @flow
*/

import {
  List,
} from 'immutable'

import { networkObjects } from '../../components/IconList/props'
import ProfileRecord from '../../records/Profile'
import NetworkRecord from '../../records/Network'
import FETCH_STATUS from '../../../app/constants/fetch-status'

export type Props = {
  profile: ProfileRecord,
  fetchStatus: string,
}

const profile = ProfileRecord({
  name: 'Shane Cavaliere',
  photoUrl: 'http://d1x6pxn199r2dp.cloudfront.net/images/shanecavaliere-avatar.jpg',
  title: 'full stack developer + designer',
  networks: List(networkObjects).map(network => NetworkRecord(network)),
})

export const sampleProps: Props = {
  profile,
  fetchStatus: FETCH_STATUS.FETCHED,
}
