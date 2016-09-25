// @flow

import { spring } from 'react-motion'

const springConfig = {
  stiffness: 250,
  damping: 27,
  precision: 0.01,
}

export default (value) => spring(value, springConfig)
