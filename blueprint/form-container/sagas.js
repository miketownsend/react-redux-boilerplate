import { call, put, takeLatest } from 'redux-saga/effects'
import { autofill } from 'redux-form'

import { SubmissionError } from '../../utilities/errors'
import { request, METHODS, ENDPOINTS } from '../../modules/auth'

import {
  NAME,
  SUBMIT,
  SUBMIT_SUCCEEDED,
  SUBMIT_FAILED,
  LOAD,
  FETCH_METHOD_FAILED,
  FETCH_METHOD_SUCCEEDED
} from './constants'

/** Saga for loading prerequisites of the form */
const loadSaga = function* () {
  yield takeLatest(LOAD, loadSagaHandler)
}

export function* loadSagaHandler (action) {
  try {
    let method = yield call(request, {
      method: METHODS.GET,
      endpoint: ENDPOINTS.METHODS,
      id: action.payload.methodId
    })

    yield put(autofill(NAME, 'name', method.name))
    yield put(autofill(NAME, 'description', method.description))
    yield put({ type: FETCH_METHOD_SUCCEEDED, payload: method })
  } catch (err) {
    yield put({ type: FETCH_METHOD_FAILED, payload: err })
  }
}

// Saga for the submission of the form - mocks doing a method update
const formSubmissionSaga = function* () {
  yield takeLatest(SUBMIT, loadSaga)
}

export function* formSubmissionHandler (action) {
  try {
    const response = yield call(request, {
      method: METHODS.POST,
      endpoint: ENDPOINTS.METHODS,
      id: action.payload.id,
      body: action.payload
    })

    yield put({ type: SUBMIT_SUCCEEDED, payload: response })

    // Return the response so that the form knows it was successful.
    return response
  } catch (err) {
    yield put({ type: SUBMIT_FAILED, payload: err })

    // Throw a SubmissionError which will be picked up and displayed by the form.
    if (err.status) {
      throw new SubmissionError({
        _error: `${err.detail} - ${err.description}`,
        ...err.fields
      })
    }
  }
}

export default [
  loadSaga,
  formSubmissionSaga
]
