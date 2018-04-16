/** Define externally available action creators here */

import {
  SUBMIT,
  LOAD
} from './constants'

export const submit = (options) => ({
  type: SUBMIT,
  payload: options
})

export const load = (options) => ({
  type: LOAD,
  payload: options
})
