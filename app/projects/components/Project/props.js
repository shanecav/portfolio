/**
*
* Project Props
*
* @flow
*/

import type { List } from 'immutable'

import { sampleProps as sampleDetailsProps } from '../ProjectDetails/props'
import ProjectRecord from '../../records/Project'

export type Props = {
  project: ProjectRecord<{
    image: string,
    title: string,
    subheading: string,
    description: string,
    role: string,
    server: List<string>,
    client: List<string>,
  }>,
  media?: string,
}

export const sampleProps: Props = {
  project: sampleDetailsProps.project,
  media: 'desktop',
}

export const samplePropsPhone: Props = {
  project: sampleDetailsProps.project,
  media: 'phone',
}
