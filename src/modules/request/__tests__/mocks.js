const sourceId = 'SOURCE_ID'
const requestId = 'REQUEST_ID'
const date = new Date()

export const mockRequestOptions = {
  baseUrl: 'http://api.tvmaze.com',
  method: 'get',
  endpoint: '/shows',
  id: 2476,
  params: { embed: 'cast' },
  sourceId,
  requestId,
  startedAt: date
}

export const mockResponse = {
  sourceId,
  requestId,
  finishedAt: date,
  data: { test: true }
}

export const mockResponseDifferentRequest = {
  sourceId,
  requestId: 'DIFFERENT',
  finishedAt: date,
  data: { test: true }
}

export const mockErrorResponse = {
  sourceId,
  requestId,
  finishedAt: date,
  error: {
    status: 500,
    message: 'API Error'
  }
}

export const initialisedRequestCache = {
  [sourceId]: {
    requestId,
    sourceId,
    error: null,
    isLoading: true,
    hasSucceeded: false,
    hasFailed: false,
    startedAt: date,
    finishedAt: null,
    ...mockRequestOptions
  }
}

export const cacheWithResponseData = {
  [sourceId]: {
    requestId,
    sourceId,
    error: null,
    isLoading: false,
    hasSucceeded: true,
    hasFailed: false,
    startedAt: date,
    finishedAt: date,
    data: { test: true },
    ...mockRequestOptions
  }
}

export const cacheWithError = {
  [sourceId]: {
    requestId,
    sourceId,
    isLoading: false,
    hasSucceeded: false,
    hasFailed: true,
    data: null,
    startedAt: date,
    finishedAt: date,
    error: {
      status: 500,
      message: 'API Error'
    },
    ...mockRequestOptions
  }
}
