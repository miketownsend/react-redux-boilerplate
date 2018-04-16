import { combineReducers } from 'redux'
// import { reducer as forms } from 'redux-form'

import location from '../modules/location'
import request from '../modules/request'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // form: forms,
    [location.constants.NAME]: location.reducer,
    [request.constants.NAME]: request.reducer,

    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
