const fs = require('fs')
const glob = require('glob')
const path = require('path')
const pp = require('preprocess')
const { camelize, decamelize } = require('humps')

const { isDirectory, getDirectories } = require('./helpers')

/**
 * UPDATE ROUTES
 * Update the index route to include this route. Should be removed if it is the child route of
 * another route.
 */
module.exports = function(blueprint) {
  let IMPORT_ROUTES = ''
  let LOAD_ROUTES = ''

  const routes = getDirectories(path.join(blueprint.src_path, 'routes'))
  routes.forEach(function (filepath, i) {
    let name = path.parse(filepath).base

    const camelizedName = camelize(name)

    let import_path = `./${name}`
    IMPORT_ROUTES += `import ${camelizedName}Route from '${import_path}'\n`
    LOAD_ROUTES += `    ${camelizedName}Route(store)${i !== (routes.length - 1) ? ',\n' : ''}`
  })

  pp.preprocessFileSync(
    path.join(__dirname, 'routes', 'index.js'),
    path.join(blueprint.src_path, 'routes', 'index.js'),
    { IMPORT_ROUTES: IMPORT_ROUTES, LOAD_ROUTES: LOAD_ROUTES }
  )
  console.log('- \\routes\\index.js')
}
