// @flow

import {
  Record,
  List,
} from 'immutable'

const ProfileRecord = Record({
  name: '',
  photoUrl: '',
  title: '',
  networks: List(),
})

export default ProfileRecord
