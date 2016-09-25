/**
*
* TabContentItem Props
*
* @flow
*/

export type Props = {
  position: 'left' | 'right' | 'active',
  refFn?: (node: any) => void,
  children?: any,
}

export const sampleProps: Props = {
  position: 'active',
}
