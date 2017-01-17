/**
*
* Projects Props
*
* @flow
*/

import { sampleProps as project } from '../../components/Project/props'

import type { ProjectDetails } from '../../components/ProjectDetails/props' // eslint-disable-line no-duplicate-imports

export type Props = {
  projects: Array<ProjectDetails>,
}

export const sampleProps: Props = {
  projects: [project.project],
}
