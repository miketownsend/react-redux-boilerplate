import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import sinon from 'sinon'
import * as helpers from './helpers'

configure({ adapter: new Adapter() })

/* Ensure mocked window global object exists */
global.window = {
  location: {
    search: ''
  }
}

/* Make helper functions available to all tests without needing import */
global.sinon = sinon
global.helper = helpers
global.localStorage = new helpers.LocalStorageMock()
