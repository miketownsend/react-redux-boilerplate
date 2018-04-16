import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import createStore from './store/createStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')
const CustomErrorReporter = ({ error }) => <Redbox error={error} />

CustomErrorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired
}

const render = () => {
  const routes = require('./routes').default
  ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
      <Provider store={store}>
        <Router history={browserHistory} children={routes(store)} />
      </Provider>
    </AppContainer>,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./routes', () => render())
  }
}

// ========================================================
// Go!
// ========================================================
render()
