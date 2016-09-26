/**
*
* TabItem Props
*
* @flow
*/

export type Props = {
  active: boolean,
  refFn?: ?(node: any) => void, // automatically injected by TabList
  updateActiveItem?: (e: Event) => void, // automatically injected by Tabs > Tablist
  children?: any,
}
