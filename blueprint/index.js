const fs = require('fs')
const path = require('path')
const program = require('commander')

const processBlueprint = require('./process-blueprint')
const updateRoutes = require('./update-routes')
const updateStore = require('./update-store')
const updateStyles = require('./update-styles')

let blueprintType
let blueprintName

program
  .version('0.1.0')
  .usage('[options] <type> <name>')
  .option('-o --overwrite', 'Overwrite existing files')
  .action(function (type, name) {
    blueprintType = type
    blueprintName = name
  })

program.parse(process.argv)

const BLUEPRINTS = {
  reset: {
    updateStore: true,
    // updateRouter: true,
    updateStyles: true,
    updateTestHelpers: true
  },
  container: {
    path: path.join(__dirname, 'container'),
    dest: 'containers',
    updateStyles: true
  },
  component: {
    path: path.join(__dirname, 'component'),
    dest: 'components',
    updateStyles: true
  },
  form: [
    {
      path: path.join(__dirname, 'form'),
      dest: 'forms',
      updateStyles: true
    },
    {
      path: path.join(__dirname, 'form-container'),
      dest: 'containers',
      updateStore: true
    }
  ],
  model: {
    path: path.join(__dirname, 'model'),
    dest: 'models'
  },
  module: {
    path: path.join(__dirname, 'module'),
    excludeFiles: ['container.js'],
    dest: 'modules',
    updateStore: true
  },
  route: {
    path: path.join(__dirname, 'route'),
    dest: 'routes',
    updateRouter: true
  }
}

/* SETUP BLUEPRINT */
const blueprint = BLUEPRINTS[blueprintType]
if (!blueprint) throw new Error(`Blueprint type: ${blueprintType} does not exist`)

const blueprints = Array.isArray(blueprint) ? blueprint : [blueprint]

/* Run the blueprint/blueprints */
blueprints.forEach((blueprint) => {
  blueprint.name = blueprintName.replace ? blueprintName.replace('/', '.') : blueprintName
  blueprint.rawName = blueprintName

  const src_path = path.join(__dirname, '..', 'src')
  blueprint.src_path = src_path

  /**
   * PREPROCESS BLUEPRINT
   * Preprocesses files within the relevant blueprint folder and copies them to destination folder.
   */
  if (blueprint.path) {
    if (blueprint.dest) {
      const dest_path = path.join(blueprint.src_path, blueprint.dest, blueprint.name)
      if (!fs.existsSync(dest_path)) { fs.mkdirSync(dest_path) }
      blueprint.dest_path = dest_path
    }

    if (fs.existsSync(path.join(blueprint.path, '__tests__'))) {
      const test_path = path.join(blueprint.dest_path, '__tests__')
      if (!fs.existsSync(test_path)) { fs.mkdirSync(test_path) }
      blueprint.test_path = test_path
    }

    console.log(`\nGenerating \\${path.join(blueprint.dest, blueprint.name)}`)
    processBlueprint(blueprint, { overwrite: program.overwrite })
  } else {
    console.log(`\n Updating reducers, sagas and routes`)
  }

  if (blueprint.updateStore) {
    updateStore(blueprint)
  }

  if (blueprint.updateRouter) {
    updateRoutes(blueprint)
  }

  if (blueprint.updateStyles) {
    updateStyles(blueprint)
  }
})

