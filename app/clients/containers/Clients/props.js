/**
*
* Clients Props
*
* @flow
*/

import {
  List,
} from 'immutable'

export type Props = {
  clients: List<string>,
}

export const sampleProps: Props = {
  clients: List([
    'ABC',
    'XYZ',
  ]),
}
