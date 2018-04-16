import {
  LOCATION_CHANGE
} from '../constants'

import reducer, { getInitialState } from '../reducer'
import * as Helpers from '../../../../tests/helpers'
import { mockLocation } from './mock'

/**
 * Create a test function for checking the changes caused by an action.
 * Takes 3 arguments:
 *   changesToInitialState [object] an object with any properties to change on initial state for the reducer
 *   action [object] a redux action and payload to pass to the reducer
 *   changesToOutputState [object] an object with expected differences between intial state and reduced state
 *
 * Note: helper is a global setup in tests/jest.setup.js via /jest.config.js
 */
const testReducer = Helpers.reducerTestFactory(reducer, getInitialState)

/** Jest module */
describe('Location - reducer', () => {
  it('should return the initial state', () => {
    const out = reducer(undefined, {})
    expect(out).toEqual(getInitialState())
  })

  it('should handle LOCATION_CHANGE', () => {
    testReducer(
      {},
      { type: LOCATION_CHANGE, payload: { ...mockLocation } },
      { ...mockLocation }
    )
  })
})
