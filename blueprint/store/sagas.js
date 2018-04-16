/* @echo IMPORT_SAGAS */
export default function populateSagas (sagaMiddleware) {
  function load (sagas) {
    sagas.forEach((saga) => sagaMiddleware.run(saga))
  }

/* @echo LOAD_SAGAS */
  return sagaMiddleware
}
