// @flow

import type { Map } from 'immutable'

export const profileSelector = {
  data: (state: Map<string, *>) => state.getIn(['profile', 'data']),
  fetchStatus: (state: Map<string, *>) => state.getIn(['profile', 'fetchStatus']),
}
