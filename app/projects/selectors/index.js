// @flow

import type { Map } from 'immutable'

export const projectsSelector = (state: Map<string, *>) => state.getIn(['projects', 'data'])
