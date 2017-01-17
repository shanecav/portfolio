/**
*
* About Props
*
* @flow
*/

import {
  List,
} from 'immutable'

export type Props = {
  about: List<string>,
}

export const sampleProps: Props = {
  about: List([
    'Some sample content!',
    'And some more...',
  ]),
}
