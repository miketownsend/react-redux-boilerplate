import React from 'react'
import { Route, IndexRoute } from 'react-router'
import ShowsContainer from '../containers/ShowsContainer'
import ShowDetailContainer from '../containers/ShowDetail'
import PageLayout from '../layouts/PageLayout'

export const createRoutes = (store) => {
  return <Route path='/' component={PageLayout}>
    <IndexRoute component={ShowsContainer} />
    <Route path='/shows/:showId' component={ShowDetailContainer} />
  </Route>
}

export default createRoutes
