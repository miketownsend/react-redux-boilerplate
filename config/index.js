var env = process.env.NODE_ENV || 'development'

const config = {
  test: {
    api: `http://http://api.tvmaze.com`
  },
  development: {
    api: `http://http://api.tvmaze.com`
  },
  production: {
    api: `http://http://api.tvmaze.com`
  }
}

module.exports = config[env]
