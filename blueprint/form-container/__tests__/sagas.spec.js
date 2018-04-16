import _ from 'lodash'
import { put, call } from 'redux-saga/effects'
import { autofill } from 'redux-form'

import { request, ENDPOINTS, METHODS, SERVICES } from '../../../modules/auth'
import { APIError, SubmissionError, MissingArgumentError } from '../../../utilities/errors'

import { formSubmissionHandler, loadSagaHandler } from '../sagas'
import { submit } from '../actions'

import {
  NAME,
  SUBMIT,
  SUBMIT_SUCCEEDED,
  SUBMIT_FAILED,
  FETCH_METHOD_SUCCEEDED
} from '../constants'

describe('/* @echo CAPITALIZED_NAME */ - saga:formSubmissionHandler', () => {
  it('should send request to server and succeed on valid response', () => {
    const action = { payload: { method_id: 'method-1', name: 'Updated Mock Method' } }
    const gen = formSubmissionHandler(action)

    // Run to request
    expect(gen.next().value).toEqual(call(request, {
      method: METHODS.POST,
      endpoint: ENDPOINTS.METHODS,
      id: action.payload.id,
      body: action.payload
    }))

    expect(gen.next().value).toEqual(put({ type: SUBMIT_SUCCEEDED, payload: action.method }))
  })

  it('should fail if request throws error', () => {
    const action = { payload: { method_id: 'method-1', name: 'Updated Mock Method' } }
    const gen = formSubmissionHandler(action)

    // Submit form
    gen.next()

    // Throw an error from the request handler
    const err = new APIError(mock.error({ status: 400 }))
    expect(gen.throw(err).value).toEqual(put({ type: SUBMIT_FAILED, payload: err }))

    // Expect to throw a submission error
    expect(() => { gen.next() }).toThrow(SubmissionError)
  })
})

describe('/* @echo CAPITALIZED_NAME */ - saga:loadSagaHandler', () => {
  it('should retrieve method and set name field if empty', () => {
    const action = { payload: { method_id: 'method-1' } }

    const gen = loadSagaHandler(action)

    // Run to method request
    gen.next()

    // Run to put FETCH_METHOD_SUCCEEDED
    const method = { id: 'method-1', name: 'Mock Method', description: 'Mock description' }
    expect(gen.next(method).value)
      .toEqual(put(autofill(NAME, 'name', method.name)))

    expect(gen.next(method).value)
      .toEqual(put(autofill(NAME, 'description', method.description)))

    expect(gen.next(method).value)
      .toEqual(put({ type: FETCH_METHOD_SUCCEEDED, payload: method }))
  })
})
