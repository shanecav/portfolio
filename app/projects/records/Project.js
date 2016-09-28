// @flow

import {
  Record,
  List,
} from 'immutable'

const ProjectRecord = Record({
  image: '',
  title: '',
  subheading: '',
  description: '',
  role: '',
  server: List(),
  client: List(),
})

export default ProjectRecord
