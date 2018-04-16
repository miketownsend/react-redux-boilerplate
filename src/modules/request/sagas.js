import { call, put, takeEvery } from 'redux-saga/effects'
import randomstring from 'randomstring'
import request from './request'

import {
  SEND_REQUEST,
  REQUEST_SENT,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED
} from './constants'

/** SAGA HANDLERS */
export function* sendRequest (action) {
  // Unique* id ensures that a response from a previous request
  // will not fulfill a subsequent request from the same source.
  let requestId = randomstring.generate(7)

  // Identifies the request to external containers
  let sourceId = action.payload.sourceId

  try {
    yield put({
      type: REQUEST_SENT + sourceId,
      payload: {
        ...action.payload,
        requestId: requestId,
        startedAt: new Date()
      }
    })

    const data = yield call(request, action.payload)

    yield put({
      type: REQUEST_SUCCEEDED + sourceId,
      payload: {
        requestId: requestId,
        sourceId: action.payload.sourceId,
        finishedAt: new Date(),
        data: data
      }
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: REQUEST_FAILED + sourceId,
      payload: {
        requestId: requestId,
        sourceId: sourceId,
        finishedAt: new Date(),
        error: error
      }
    })
  }
}

/** SAGA HOOKS */
const defaultActionSaga = function* () {
  yield takeEvery(SEND_REQUEST, sendRequest)
}

export default [
  defaultActionSaga
]
