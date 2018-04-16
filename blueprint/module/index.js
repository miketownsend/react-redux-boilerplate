/** Export the module as one object */

import * as actions from './actions'
import * as constants from './constants'
import * as selectors from './selectors'
import /* @echo CAPITALIZED_NAME */Container from './container'
import reducer from './reducer'

export default { actions, constants, selectors, reducer, /* @echo CAPITALIZED_NAME */Container }
