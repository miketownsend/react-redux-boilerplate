import { camelizeKeys, decamelizeKeys } from 'humps'

// Transform values from api for use in client
export const deserialize = (d) => {
  return camelizeKeys({ ...d })
}

// Transform values from client for use in API
export const serialize = (d) => {
  return decamelizeKeys({ ...d })
}
