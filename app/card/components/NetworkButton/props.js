/**
*
* NetworkButton Props
*
* @flow
*/

export type Props = {
  type: 'github' | 'stackoverflow' | 'linkedin' | 'twitter' | 'email',
  link: string,
}

export const sampleProps: Props = {
  type: 'github',
  link: 'https://github.com/shanecav',
}
