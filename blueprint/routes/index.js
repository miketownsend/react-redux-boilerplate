import ShowsContainer from '../containers/ShowsContainer'
/* @echo IMPORT_ROUTES */
export const createRoutes = (store) => ({
  path        : '/',
  component   : ShowsContainer,
  childRoutes : [/* @echo LOAD_ROUTES */]
})

export default createRoutes
