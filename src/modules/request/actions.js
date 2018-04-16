import { validateRequestOptions } from './validate'

import {
  METHODS,
  SEND_REQUEST
} from './constants'

/**
 * Sends a request to GET request from the REST API
 * @param  {string} sourceId          Unique ID for the source/container for this request
 * @param  {string} options.endpoint  API path to send the request to
 * @param  {string} options.id        Id of the resource to fetch from the API
 * @param  {object} options.query     Query parameters to include with the API request
 * @param  {object} options.body      Body JSON to include with the API request
 * @return {Promise}
 */
export const request = (sourceId, options) => {
  const restOptions = {
    ...options,
    sourceId: sourceId
  }

  validateRequestOptions(restOptions)

  return {
    type: SEND_REQUEST,
    payload: restOptions
  }
}

/**
 * REST GET request from the REST API
 * @param  {string} sourceId          Unique ID for the source/container for this request
 * @param  {string} options.endpoint  API path to send the request to
 * @param  {string} options.id        Id of the resource to fetch from the api
 * @param  {object} options.query     Query parameters to include with the request
 * @return {Promise}
 */
export const fetch = (sourceId, options) => {
  const restOptions = {
    ...options,
    method: METHODS.GET,
    sourceId: sourceId
  }

  validateRequestOptions(restOptions, { id: true })

  return {
    type: SEND_REQUEST,
    payload: restOptions
  }
}

/**
 * REST Search request from the REST API
 * @param  {string} sourceId          Unique ID for the source/container for this request
 * @param  {string} options.endpoint  API path to send the request to
 * @param  {object} options.query     Query parameters to include with the API request
 * @param  {object} options.body     Body JSON to include with the API request
 * @return {Promise}
 */
export const search = (sourceId, options) => {
  const restOptions = {
    ...options,
    method: METHODS.GET,
    sourceId: sourceId
  }

  validateRequestOptions(restOptions, { query: true })

  return {
    type: SEND_REQUEST,
    payload: restOptions
  }
}

/**
 * REST Update request from the REST API
 * @param  {string} sourceId          Unique ID for the source/container for this request
 * @param  {string} options.endpoint  API path to send the request to
 * @param  {string} options.id        Id of the resource to fetch from the API
 * @param  {object} options.query     Query parameters to include with the API request
 * @param  {object} options.body      Body JSON to include with the API request
 * @return {Promise}
 */
export const update = (sourceId, options) => {
  const restOptions = {
    ...options,
    method: METHODS.PUT,
    sourceId: sourceId
  }

  validateRequestOptions(restOptions, { body: true, id: true })

  return {
    type: SEND_REQUEST,
    payload: restOptions
  }
}

/**
 * REST Create request from the REST API
 * @param  {string} sourceId          Unique ID for the source/container for this request
 * @param  {string} options.endpoint  API path to send the request to
 * @param  {object} options.body      Body JSON to include with the API request
 * @return {Promise}
 */
export const create = (sourceId, options) => {
  const restOptions = {
    ...options,
    method: METHODS.POST,
    sourceId: sourceId
  }

  validateRequestOptions(restOptions, { body: true })

  return {
    type: SEND_REQUEST,
    payload: restOptions
  }
}

/**
 * REST Create request from the REST API
 * @param  {string} sourceId          Unique ID for the source/container for this request
 * @param  {string} options.endpoint  API path to send the request to
 * @param  {object} options.id        Id of the resource to fetch from the API
 * @return {Promise}
 */
export const remove = (sourceId, options) => {
  const restOptions = {
    ...options,
    method: METHODS.DELETE,
    sourceId: sourceId
  }

  validateRequestOptions(restOptions, { id: true })

  return {
    type: SEND_REQUEST,
    payload: options
  }
}
