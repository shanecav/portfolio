/**
*
* ProjectInfoIcon Props
*
* @flow
*/

export type Props = {
  type: 'desc' | 'tech',
  text: string,
  active?: boolean,
}

export const sampleProps: Props = {
  type: 'tech',
  text: 'Tech Stack',
  active: true,
}
