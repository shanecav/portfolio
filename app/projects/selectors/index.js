// @flow

import type { Map } from 'immutable'

export const projectsSelector = {
  data: (state: Map<string, *>) => state.getIn(['projects', 'data']),
  fetchStatus: (state: Map<string, *>) => state.getIn(['projects', 'fetchStatus']),
}
