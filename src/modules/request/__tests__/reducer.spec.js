import * as Helpers from '../../../../tests/helpers'

import {
  REQUEST_SENT,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED
} from '../constants'

import reducer, { getInitialState } from '../reducer'
import {
  sourceId,
  mockRequestOptions,
  mockResponse,
  cacheWithResponseData,
  cacheWithError,
  initialisedRequestCache,
  mockErrorResponse,
  mockResponseDifferentRequest
} from './mocks'

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
describe('rest - reducer', () => {
  it('should return the initial state', () => {
    const out = reducer(undefined, {})
    expect(out).toEqual(getInitialState())
  })

  it('should no update if the requestId is different', () => {
    const out = reducer(initialisedRequestCache, mockResponseDifferentRequest)
    expect(out).toBe(initialisedRequestCache)
    expect(out[sourceId]).toBe(initialisedRequestCache[sourceId])
  })

  it('should handle REQUEST_SENT', () => {
    testReducer(
      {},
      { type: REQUEST_SENT + sourceId, payload: mockRequestOptions },
      initialisedRequestCache
    )
  })

  it('should handle REQUEST_SUCCESS', () => {
    testReducer(
      initialisedRequestCache,
      { type: REQUEST_SUCCEEDED + sourceId, payload: mockResponse },
      cacheWithResponseData
    )
  })

  it('should handle REQUEST_FAILED', () => {
    testReducer(
      initialisedRequestCache,
      { type: REQUEST_FAILED + sourceId, payload: mockErrorResponse },
      { ...cacheWithError }
    )
  })
})
