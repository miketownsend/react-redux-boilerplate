export function reducerTestFactory (reducer, getInitialState) {
  return function (initialStateChanges, action, expectedChangesToState = {}) {
    const initialState = { ...getInitialState(), ...initialStateChanges }
    // populate the initial state
    const newState = reducer(initialState, action)
    // ensure that the original object has not been returned (ensure immutable)
    expect(newState).not.toBe(initialState)
    // ensure that the expected updates have been made on the new state object
    expect(newState).toEqual({ ...getInitialState(), ...expectedChangesToState })
  }
}

export class LocalStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = value.toString()
  }

  removeItem (key) {
    delete this.store[key]
  }
}
