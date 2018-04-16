import { serialize } from './transform'

/**
 * Creates a mock json object representing this model.
 * Should be the deserialized version.
 *
 * @param  {Object} options         Overrides for the mocked object
 * @param  {[type]} shouldSerialize Whether to serialize the object or not
 * @return {[type]}                 The mocked object
 */
export const /* @echo CAMELIZED_NAME */ = (options = {}, shouldSerialize) => {
  const model = {
    id: '1234',
    userName: 'mock.user',
    fullName: 'Mock User',
    role: 'Administrator',
    email: 'mock.user@gmail.com',
    phone: '+6412345678'
  }

  return shouldSerialize ? serialize({ ...model, ...options }) : { ...model, ...options }
}

export default /* @echo CAMELIZED_NAME */
