/** Export the module as one object */

import * as actions from './actions'
import * as constants from './constants'
import * as selectors from './selectors'
import reducer from './reducer'

export const request = actions.request
export const fetch = actions.fetch
export const search = actions.search
export const update = actions.update
export const create = actions.create
export const remove = actions.remove
export const selectRequest = selectors.getRequest

export default { actions, constants, selectors, reducer }
