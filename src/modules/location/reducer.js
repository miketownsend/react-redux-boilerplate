import {
  LOCATION_CHANGE
} from './constants'

export const getInitialState = () => ({
  search: ''
})

export default function (state, action) {
  if (!state) state = getInitialState()

  switch (action.type) {
    case LOCATION_CHANGE:
      return action.payload
  }

  return state
}
