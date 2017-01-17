/**
*
* ProjectTechList Props
*
* @flow
*/

export type Props = {
  title: string,
  items: Array<string>,
}

export const sampleProps: Props = {
  title: 'Server / API',
  items: [
    'Node.js',
    'Express',
    'RethinkDB',
    'WebSockets',
  ],
}
