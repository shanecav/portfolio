// @flow

import type { Map } from 'immutable'

const mediaSelector = (state: Map<string, *>) => state.get('browser').mediaType

export default mediaSelector
