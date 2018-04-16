import { compose } from 'redux'

import { NAME } from './constants'

export const getAll = state => state[NAME]

export const getUser = compose(mod => mod.user, getAll)
