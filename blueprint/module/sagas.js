import { call, put, takeLatest } from 'redux-saga/effects'

import { MissingArgumentError } from '../../utilities/errors'
import { request, METHODS, ENDPOINTS } from '../auth'

import {
  DEFAULT_ACTION,
  DEFAULT_ACTION_SUCCEEDED,
  DEFAULT_ACTION_FAILED
} from './constants'

/** SAGA HANDLERS */

export function* defaultActionHandler (action) {
  try {
    if (!action.payload) {
      throw new MissingArgumentError('Must provide a id for user')
    }

    const user = yield call(request, {
      method: METHODS.GET,
      endpoint: ENDPOINTS.USERS,
      id: action.payload
    })

    yield put({ type: DEFAULT_ACTION_SUCCEEDED, payload: user })
  } catch (error) {
    yield put({ type: DEFAULT_ACTION_FAILED, payload: error })
  }
}

/** SAGA HOOKS */

const defaultActionSaga = function* () {
  yield takeLatest(DEFAULT_ACTION, defaultActionHandler)
}

export default [
  defaultActionSaga
]
