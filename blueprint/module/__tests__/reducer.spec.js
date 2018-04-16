import { LOGOUT } from '../../auth/constants'

import {
  DEFAULT_ACTION_SUCCEEDED,
  DEFAULT_ACTION_FAILED
} from '../constants'

import reducer, { getInitialState } from '../reducer'

/**
 * Create a test function for checking the changes caused by an action.
 * Takes 3 arguments:
 *   changesToInitialState [object] an object with any properties to change on initial state for the reducer
 *   action [object] a redux action and payload to pass to the reducer
 *   changesToOutputState [object] an object with expected differences between intial state and reduced state
 *
 * Note: helper is a global setup in tests/jest.setup.js via /jest.config.js
 */
const testReducer = helper.reducerTestFactory(reducer, getInitialState)

/** Jest module */
describe('/* @echo NAME */ - reducer', () => {
  it('should return the initial state', () => {
    const out = reducer(undefined, {})
    expect(out).toEqual(getInitialState())
  })

  it('should handle DEFAULT_ACTION_SUCCEEDED', () => {
    testReducer(
      {},
      { type: DEFAULT_ACTION_SUCCEEDED, payload: mocks.user()  },
      { user: mock.user(), error: null } // mock is a global setup in tests/jest.setup.js via /jest.config.js
    )
  })

  it('should handle DEFAULT_ACTION_FAILED', () => {
    testReducer(
      {},
      { type: DEFAULT_ACTION_FAILED, payload: mock.restError()  },
      { error: mock.restError(), user: null }
    )
  })
})
