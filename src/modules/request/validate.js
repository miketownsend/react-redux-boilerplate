import _ from 'lodash'
import { MissingArgumentError, InvalidArgumentError } from '../../utilities/errors'
import { METHODS } from './constants'

const validMethods = _.values(METHODS)

/**
 * Confirms the request is valid
 * @param  {Object} options    [description]
 * @param  {Object} required   [description]
 * @return {[type]}            [description]
 */
export function validateRequestOptions (options = {}, required = {}) {
  if (!options.sourceId || typeof options.sourceId !== 'string') {
    throw new MissingArgumentError(`Must provide a unique key to identify a request`)
  }

  if (!options.endpoint) {
    throw new MissingArgumentError(`Must provide an API endpoint for a request`)
  }

  if (!options.method) {
    throw new MissingArgumentError(`Must provide a REST method for a request`)
  } else {
    if (!validMethods.includes(options.method.toUpperCase())) {
      throw new InvalidArgumentError(`API method ${options.method} does not exist`)
    }
  }

  if (required.query && (!options.query || typeof options.query !== 'object')) {
    throw new MissingArgumentError(`Must provide an query object`)
  }

  if (required.body && (!options.body || typeof options.body !== 'object')) {
    throw new MissingArgumentError(`Must provide an body object`)
  }

  if (required.id && (!options.id || typeof options.id !== 'string')) {
    throw new MissingArgumentError(`Must provide an id for the request`)
  }
}
