const fs = require('fs')
const path = require('path')
const pp = require('preprocess')

const { getDirectories } = require('./helpers')

/**
 * UPDATE STORE
 * Update the store to include reducer and saga hooks.
 */
module.exports = function (blueprint) {
  let IMPORT_REDUCERS = ''
  let LOAD_REDUCERS = ''
  let IMPORT_SAGAS = ''
  let LOAD_SAGAS = ''

  function hasReducer (module_filepath) {
    return fs.existsSync(path.join(module_filepath, 'reducer.js'))
  }

  function hasSaga (module_filepath) {
    return fs.existsSync(path.join(module_filepath, 'sagas.js'))
  }

  let module_paths = []
  try {
    module_paths = getDirectories(path.join(blueprint.src_path, 'modules'))
  } catch (err) {
    console.log('- \\modules directory not found... skipping')
  }
  module_paths.forEach(function (module_filepath) {
    let name = path.parse(module_filepath).base
    let import_path = `../modules/${name}`

    if (hasReducer(module_filepath)) {
      IMPORT_REDUCERS += `import ${name} from '${import_path}'\n`
      LOAD_REDUCERS += `    [${name}.constants.NAME]: ${name}.reducer,\n`
    }

    if (hasSaga(module_filepath)) {
      IMPORT_SAGAS += `import ${name} from '${import_path}/sagas'\n`
      LOAD_SAGAS += `  load(${name})\n`
    }
  })

  let container_paths = []
  try {
    container_paths = getDirectories(path.join(blueprint.src_path, 'containers'))
  } catch (err) {
    console.log('- \\containers directory not found... skipping')
  }
  container_paths.forEach(function (container_filepath) {
    let name = path.parse(container_filepath).base
    let import_path = `../containers/${name}`

    if (hasReducer(container_filepath)) {
      IMPORT_REDUCERS += `import ${name} from '${import_path}'\n`
      LOAD_REDUCERS += `    [${name}.constants.NAME]: ${name}.reducer,\n`
    }

    if (hasSaga(container_filepath)) {
      IMPORT_SAGAS += `import ${name} from '${import_path}/sagas'\n`
      LOAD_SAGAS += `  load(${name})\n`
    }
  })

  pp.preprocessFileSync(
    path.join(__dirname, 'store', 'reducers.js'),
    path.join(blueprint.src_path, 'store', 'reducers.js'),
    { IMPORT_REDUCERS: IMPORT_REDUCERS, LOAD_REDUCERS: LOAD_REDUCERS }
  )
  console.log('- \\store\\reducers.js')

  pp.preprocessFileSync(
    path.join(__dirname, 'store', 'sagas.js'),
    path.join(blueprint.src_path, 'store', 'sagas.js'),
    { IMPORT_SAGAS: IMPORT_SAGAS, LOAD_SAGAS: LOAD_SAGAS }
  )
  console.log('- \\store\\sagas.js')
}
