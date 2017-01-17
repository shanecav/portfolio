/**
*
* ProjectTech Props
*
* @flow
*/

export type Props = {
  server: Array<string>,
  client: Array<string>,
}

export const sampleProps: Props = {
  server: [
    'Node.js',
    'Express',
    'RethinkDB',
    'WebSockets',
  ],
  client: [
    'React Native',
    'Redux',
    'redux-saga',
    'Exponent'
  ],
}
