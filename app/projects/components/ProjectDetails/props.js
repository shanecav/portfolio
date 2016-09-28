/**
*
* ProjectDetails Props
*
* @flow
*/

import { List } from 'immutable'

import { sampleProps as techSampleProps } from '../ProjectTech/props'
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
}

export const sampleProps: Props = {
  project: ProjectRecord({
    image: 'http://d1x6pxn199r2dp.cloudfront.net/images/blockpop.jpg',
    title: 'blockpop',
    subheading: 'Geo-based event & nightlife discovery',
    description: 'I’m currently building blockpop with a small team. This project has not yet launched, but a preview build of the app will be available soon.',
    role: 'Design & development lead',
    server: techSampleProps.server,
    client: techSampleProps.client,
  }),
}
