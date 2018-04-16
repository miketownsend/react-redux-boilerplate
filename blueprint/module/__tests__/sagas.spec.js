import _ from 'lodash'
import { put } from 'redux-saga/effects'

import { request, ENDPOINTS, METHODS } from '../../auth'
import { defaultActionHandler } from '../sagas'
import {
  DEFAULT_ACTION_FAILED,
  DEFAULT_ACTION_SUCCEEDED
} from '../constants'

describe('/* @echo NAME */ - sagas - defaultActionHandler', () => {
  it('should fail without a user id as payload', () => {
    const action = {
      payload: false
    }
    const gen = defaultActionHandler(action)
    // Run to the first yield statement, which should be the PUT action.
    // Do not try to mock the error created as the stack will not match.
    const result = gen.next().value
    expect(_.get(result, 'PUT.action.type')).toEqual(DEFAULT_ACTION_FAILED)
  })

  it('should succeed if request is successful', () => {
    const user = mock.user() // mock is a global created in tests/jest.setup.js
    const action = {
      payload: user.id
    }

    // Get the saga generator function to test
    const gen = defaultActionHandler(action)

    // Run to the first yield with gen.next() and test the call
    expect(gen.next().value).toEqual(call(request, {
      method: METHODS.GET,
      endpoints: ENDPOINTS.USERS,
      id: user.id
    })

    // Pass a mocked return value for the first yield, and run to the second yield
    expect(get.next(user).value).toEqual(put({
      type: DEFAULT_ACTION_SUCCEEDED,
      payload: action.payload
    }))
  })
})
