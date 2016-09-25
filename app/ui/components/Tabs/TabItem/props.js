/**
*
* TabItem Props
*
* @flow
*/

export type Props = {
  type: 'desc-icon' | 'tech-icon',
  text: string,
  active?: boolean,
  refFn?: ?(node: any) => void, // automatically injected by TabList
  handleClick?: (e: Event) => void, // automatically injected by Tabs > Tablist
}
