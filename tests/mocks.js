export const mockRequestOptions = {
  baseUrl: 'http://api.tvmaze.com',
  method: 'get',
  endpoint: '/shows',
  id: 2476,
  params: {
    embed: 'cast'
  }
}

export const mockShow = {
  'id': 2476,
  'name': 'Marvel\'s Guardians of the Galaxy',
  'type': 'Animation',
  'language': 'English',
  'genres': [ 'Action', 'Adventure', 'Science-Fiction' ]
}

export const mockResponse = {
  status: 200,
  data: Object.assign({}, mockShow)
}

export const mockError = {
  status: 500,
  message: 'Mock Error'
}
