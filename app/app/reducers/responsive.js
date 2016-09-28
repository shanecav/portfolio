// @flow

import { createResponsiveStateReducer } from 'redux-responsive'

export default createResponsiveStateReducer({
  phone: 480,
  tablet: 768,
  desktop: 1100,
})
