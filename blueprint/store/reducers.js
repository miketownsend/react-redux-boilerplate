import { combineReducers } from 'redux'
// import { reducer as forms } from 'redux-form'

/* @echo IMPORT_REDUCERS */
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // form: forms,
/* @echo LOAD_REDUCERS */
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
