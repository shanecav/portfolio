/**
*
* Projects Props
*
* @flow
*/

import { List } from 'immutable'

import { sampleProps as project } from '../../components/Project/props'

import type { Props as ProjectProps } from '../../components/Project/props' // eslint-disable-line no-duplicate-imports

export type Props = {
  projects: List<ProjectProps>,
}

export const sampleProps: Props = {
  projects: List([project])
}
