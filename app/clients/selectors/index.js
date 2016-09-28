// @flow

import type { Map } from 'immutable'

export const clientsSelector = {
  data: (state: Map<string, *>) => state.getIn(['clients', 'data']),
  fetchStatus: (state: Map<string, *>) => state.getIn(['clients', 'fetchStatus']),
}
