import { compose } from 'redux'

import { NAME } from './constants'

export const getMethod = state => state[NAME].method
export const getForm = state => state.form[NAME] || {}
export const getSyncErrors = compose(form => form.syncErrors, getForm)
