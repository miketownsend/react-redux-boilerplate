/** Define externally available action creators here */

import {
  GO_TO,
  GO_BACK,
  LOCATION_CHANGE
} from './constants'

export const goTo = (path) => ({
  type: GO_TO,
  payload: path
})

export const goBack = (options) => ({
  type: GO_BACK
})

export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}
