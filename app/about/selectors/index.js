// @flow

import type { Map } from 'immutable'

export const aboutSelector = {
  data: (state: Map<string, *>) => state.getIn(['about', 'data']),
  fetchStatus: (state: Map<string, *>) => state.getIn(['about', 'fetchStatus']),
}
