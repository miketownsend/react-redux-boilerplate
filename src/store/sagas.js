import location from '../modules/location/sagas'
import request from '../modules/request/sagas'

export default function populateSagas (sagaMiddleware) {
  function load (sagas) {
    sagas.forEach((saga) => sagaMiddleware.run(saga))
  }

  load(location)
  load(request)

  return sagaMiddleware
}
