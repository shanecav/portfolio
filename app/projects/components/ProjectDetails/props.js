/**
*
* ProjectDetails Props
*
* @flow
*/

import { sampleProps as techSampleProps } from '../ProjectTech/props'

export type ProjectDetails = {
  image: string,
  title: string,
  subheading: string,
  description: string,
  role: string,
  server: Array<string>,
  client: Array<string>,
}

export type Props = {
  project: ProjectDetails,
}

export const sampleProps: Props = {
  project: {
    image: 'http://d1x6pxn199r2dp.cloudfront.net/images/blockpop.jpg',
    title: 'blockpop',
    subheading: 'Geo-based event & nightlife discovery',
    description: 'I’m currently building blockpop with a small team. This project has not yet launched, but a preview build of the app will be available soon.',
    role: 'Design & development lead',
    server: techSampleProps.server,
    client: techSampleProps.client,
  },
}
