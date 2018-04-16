import { serialize } from './transform'

/**
 * Creates a mock json object representing this model.
 * Should be the deserialized version.
 *
 * @param  {Object} options         Overrides for the mocked object
 * @param  {[type]} shouldSerialize Whether to serialize the object or not
 * @return {[type]}                 The mocked object
 */
export const show = (options = {}, shouldSerialize) => {
  const model = {
    id: '1234',
    name: 'Under the Dome',
    genres: [
      'Drama',
      'Science-Fiction',
      'Thriller'
    ],
    rating: {
      average: 4
    },
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York'
      }
    },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg'
    },
    summary: '<p><b>Under the Dome</b> is the story of a small town that is suddenly hidden under a dome. Wow!</p>'
  }

  return shouldSerialize ? serialize({ ...model, ...options }) : { ...model, ...options }
}

export default show
