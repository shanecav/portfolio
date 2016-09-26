/**
*
* ProjectTech Props
*
* @flow
*/

import { List } from 'immutable'

export type Props = {
  server: List<string>,
  client: List<string>,
}

export const sampleProps: Props = {
  server: List([
    'Node.js',
    'Express',
    'RethinkDB',
    'WebSockets',
  ]),
  client: List([
    'React Native',
    'Redux',
    'redux-saga',
    'Exponent'
  ]),
}
