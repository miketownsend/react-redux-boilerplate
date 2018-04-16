import { LOGOUT } from '../../modules/auth/constants'
import {
  FETCH_METHOD_SUCCEEDED
} from './constants'

export const getInitialState = () => ({
  method: null
})

export default (state, action) => {
  if (!state) state = getInitialState()

  switch (action.type) {
    case LOGOUT:
      return getInitialState()

    case FETCH_METHOD_SUCCEEDED:
      return { ...state, method: action.payload }
  }

  return state
}
