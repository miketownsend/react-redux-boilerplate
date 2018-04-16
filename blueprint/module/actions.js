/** Define externally available action creators here */

import {
  DEFAULT_ACTION
} from './constants'

export const defaultAction = (options) => ({
  type: DEFAULT_ACTION,
  payload: options
})
