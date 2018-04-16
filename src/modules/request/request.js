import axios from 'axios'
import { ApiError } from '../../utilities/errors'

/**
 * Parse an error from the axios request library into a consistent format.
 *
 * @param  {Object|Error} err The error caught from the axios request
 * @param  {String} err The url path used for this request
 * @return {Object} A standard error object
 */
const parseError = function (err) {
  // The error hasn't been handled by axios, could be somewhere else in the code base
  if (!err.response) {
    return err
  }

  // The error is an axios error, and the response data from the server is at err.response.data
  const response = err.response
  if (response.data) {
    let apiError = new ApiError(
      response.data.message,
      response.status,
      response.data)
    return apiError
  }

  // The error is an axios error, but there was no response from the server. Usually this means
  // the server is not available (404)
  if (response) {
    let status = response.status || 404
    let text = 'Unknown API Error'
    const apiError = new ApiError(text, status)

    return apiError
  }

  return err
}

/**
 * Make an AJAX request
 * @param {string} options.baseUrl The base url to send the request to
 * @param {string} options.endpoint The url path to send the request to
 * @param {string} options.method The HTTP Method
 * @param {object} options.headers A hash of HTTP Headers
 * @param {string} options.id The REST resource ID
 * @param {object} options.body The body json to send with a POST request
 * @param {object} options.params A hash of URL parameters to use for the request
 * @return {Promise} A Promise which resolves into the response body json
 */
export function request (options) {
  const {
    baseUrl,
    endpoint,
    method,
    id,
    body,
    params,
    serialize,
    deserialize,
    token
  } = options

  console.log(options)

  if (!method) throw new Error('Must provide an HTTP Method for the request')
  if (!endpoint) throw new Error('Must provide an HTTP Endpoint for the request')

  let headers = options.headers
  if (!headers) {
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  if (token) {
    headers['Authorization'] = 'Bearer ' + token
  }

  const url = baseUrl + endpoint + (id ? '/' + id : '')

  const axiosOptions = {
    method: method,
    url: url
  }

  if (headers) axiosOptions.headers = headers
  if (params) axiosOptions.params = params
  if (body) {
    axiosOptions.data = serialize ? serialize(body) : body
  }

  return axios(axiosOptions)
    .then(res => deserialize ? deserialize(res.data) : res.data)
    .catch((err) => {
      const apiError = parseError(err)
      throw apiError
    })
}

export default request
