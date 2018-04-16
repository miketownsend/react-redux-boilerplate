const fs = require('fs')
const glob = require('glob')
const path = require('path')
const pp = require('preprocess')
const { camelize, decamelize } = require('humps')

const { isDirectory, getDirectories } = require('./helpers')

/**
 * UPDATE STYLES
 * Update the index route to include this route. Should be removed if it is the child route of
 * another route.
 */
module.exports = function (blueprint) {
  let IMPORT_SCSS = ''

  const componentStyles = getDirectories(path.join(blueprint.src_path, 'components'))
  componentStyles.forEach(function (filepath, i) {
    const name = path.parse(filepath).base

    if (fs.existsSync(path.join(filepath, `${name}.scss`))) {
      const import_path = `../components/${name}/${name}`
      IMPORT_SCSS += `@import '${import_path}';\n`
    }
  })

  const containerStyles = getDirectories(path.join(blueprint.src_path, 'containers'))
  containerStyles.forEach(function (filepath, i) {
    const name = path.parse(filepath).base

    if (fs.existsSync(path.join(filepath, `${name}.scss`))) {
      const import_path = `../containers/${name}/${name}`
      IMPORT_SCSS += `@import '${import_path}';\n`
    }
  })

  pp.preprocessFileSync(
    path.join(__dirname, 'styles', 'components.scss'),
    path.join(blueprint.src_path, 'styles', '_components.scss'),
    { IMPORT_SCSS: IMPORT_SCSS }
  )
  console.log('- \\styles\\components.scss')
}
