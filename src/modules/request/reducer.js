import {
  NAME,
  REQUEST_SENT,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED
} from './constants'

export const getInitialState = () => ({})

export default function (state, action) {
  if (!state) state = getInitialState()

  if (!action.type || action.type.indexOf(NAME) !== 0) return state

  let oldRequestCache, newRequestCache
  let sourceId = action.payload ? action.payload.sourceId : null
  let requestId = action.payload ? action.payload.requestId : null

  if (action.type.indexOf(REQUEST_SENT) === 0) {
    newRequestCache = {
      requestId: requestId,
      sourceId: sourceId,
      isLoading: true,
      hasSucceeded: false,
      hasFailed: false,
      error: null,
      startedAt: action.payload.startedAt,
      finishedAt: null,
      ...action.payload
    }

    return {
      ...state,
      [sourceId]: newRequestCache
    }
  }

  if (action.type.indexOf(REQUEST_SUCCEEDED) === 0) {
    oldRequestCache = state[sourceId]
    if (oldRequestCache && oldRequestCache.requestId === requestId) {
      newRequestCache = {
        ...oldRequestCache,
        data: action.payload.data,
        isLoading: false,
        hasSucceeded: true,
        hasFailed: false,
        finishedAt: action.payload.finishedAt,
        error: null
      }

      return {
        ...state,
        [sourceId]: newRequestCache
      }
    }
  }

  if (action.type.indexOf(REQUEST_FAILED) === 0) {
    oldRequestCache = state[sourceId]
    if (oldRequestCache && oldRequestCache.requestId === requestId) {
      newRequestCache = {
        ...oldRequestCache,
        data: null,
        isLoading: false,
        hasSucceeded: false,
        hasFailed: true,
        finishedAt: action.payload.finishedAt,
        error: action.payload.error
      }

      return {
        ...state,
        [sourceId]: newRequestCache
      }
    }
  }

  return state
}
