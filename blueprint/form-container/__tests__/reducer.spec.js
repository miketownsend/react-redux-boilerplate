import {
  LOGOUT,
  FETCH_METHOD_SUCCEEDED
} from '../constants'

import reducer, { getInitialState } from '../reducer'

const testReducer = helper.reducerTestFactory(reducer, getInitialState)

describe('/* @echo CAPITALIZED_NAME */ - reducer', () => {
  it('should return the inital state', () => {
    const out = reducer(undefined, {})
    expect(out).toEqual(getInitialState())
  })

  it('should handle FETCH_METHOD_SUCCEEDED', () => {
    const method = { test: true }
    testReducer(
      {},
      { type: FETCH_METHOD_SUCCEEDED, payload: method  },
      { method: { test: true } }
    )
  })
})
