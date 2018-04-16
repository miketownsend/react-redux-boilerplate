import { browserHistory } from 'react-router'
import { eventChannel } from 'redux-saga'
import { take, call, put, takeEvery } from 'redux-saga/effects'

import {
  GO_TO,
  GO_BACK
} from './constants'

import {
  locationChange
} from './actions'

/**
 * Creates an event source for the socket which inverts the event source
 * which allows the generator to "pull" events from a channel, rather than
 * trying to push the events to the saga.
 */
function createChannel (browserHistory) {
  return eventChannel(emit => {
    browserHistory.listen((location) => {
      emit(locationChange(location))
    })

    return () => {}
  })
}

/** Reads messages from the event channel */
function* read (socket) {
  const channel = yield call(createChannel, browserHistory)
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

/** Resubscribes to all services in the subscriptions list */
function* goTo (action) {
  browserHistory.push(action.payload)
}

function* goBack () {
  browserHistory.goBack()
}

/* SAGAS ************************************/

export const listenToBrowserHistory = function* () {
  yield call(read)
}

export const goToSaga = function* () {
  yield takeEvery(GO_TO, goTo)
}

export const goBackSaga = function* () {
  yield takeEvery(GO_BACK, goBack)
}

export default [
  listenToBrowserHistory,
  goToSaga,
  goBackSaga
]
