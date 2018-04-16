import { NAME } from './constants'

export const getAll = state => state[NAME]

export const getRequest = (state, requestSourceKey) => getAll(state)[requestSourceKey] || {}
