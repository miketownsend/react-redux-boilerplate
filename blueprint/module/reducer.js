import { LOGOUT } from '../auth/constants'
import {
  DEFAULT_ACTION_SUCCEEDED,
  DEFAULT_ACTION_FAILED
} from './constants'

export const getInitialState = () => ({
  user: null,
  error: null
})

export default function (state, action) {
  if (!state) state = getInitialState()

  switch (action.type) {
    case LOGOUT:
      return getInitialState()
    case DEFAULT_ACTION_SUCCEEDED:
      return { ...state, user: action.payload, error: null }
    case DEFAULT_ACTION_FAILED:
      return { ...state, user: null, error: action.payload }
  }

  return state
}
