import React from 'react'
import { requireAuth } from '../../utilities/router'

export const createRoutes = (store) => ({
  path        : '/* @echo DASHERIZED_NAME */',
  component: <div />,
  onEnter: requireAuth(store)
  // childRoutes : []
})

export default createRoutes
