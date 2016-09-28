/**
*
* ProjectTechList Props
*
* @flow
*/

import { List } from 'immutable'

export type Props = {
  title: string,
  items: List<string>,
}

export const sampleProps: Props = {
  title: 'Server / API',
  items: List([
    'Node.js',
    'Express',
    'RethinkDB',
    'WebSockets',
  ]),
}
