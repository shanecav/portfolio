/**
*
* Project Props
*
* @flow
*/

import { sampleProps as sampleDetailsProps } from '../ProjectDetails/props'

import type { ProjectDetails } from '../ProjectDetails/props' // eslint-disable-line no-duplicate-imports

export type Props = {
  project: ProjectDetails,
  media?: string,
}

export const sampleProps: Props = {
  project: sampleDetailsProps.project,
  media: 'desktop',
}

export const samplePropsPhone: Props = {
  project: sampleDetailsProps.project,
  media: 'mobile',
}
