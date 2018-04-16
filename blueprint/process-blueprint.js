const fs = require('fs')
const glob = require('glob')
const path = require('path')
const pp = require('preprocess')
const { camelize, decamelize } = require('humps')

const { isDirectory, getDirectories } = require('./helpers')

module.exports = function (blueprint, config) {
  const files = glob.sync(path.join(blueprint.path, '**/*.*'))
  files.forEach(function (blueprint_filepath) {
    let camelizedName = camelize(blueprint.name)
    const underscoredName = decamelize(camelizedName).replace('.', '_')
    const dasherizedName = decamelize(camelizedName, { separator: '-' }).replace('.', '_')
    const capitalizedName = camelizedName[0].toUpperCase() + camelizedName.substr(1)

    // Redo camelized name to remove .
    camelizedName = camelize(underscoredName)

    function replace (str) {
      return str.replace('EXAMPLE', capitalizedName).replace('example', underscoredName)
    }

    const file_path_details = path.parse(blueprint_filepath)

    const relative_filepath = replace(path.relative(blueprint.path, blueprint_filepath))
    const blueprint_filename = replace(file_path_details.base)
    const destination_filepath = path.join(blueprint.dest_path, relative_filepath)
    const exists = fs.existsSync(destination_filepath)

    if (!config.overwrite && exists) {
      console.log(`- \\${blueprint.name}\\${blueprint_filename} - skipping (already exists)`)
      return
    }

    if (config.overwrite && exists) { fs.unlinkSync(destination_filepath) }

    console.log(`- \\${blueprint.name}\\${blueprint_filename}`)

    const options = {}
    if (file_path_details.ext === '.md') {
      options.type = 'js'
    }

    pp.preprocessFileSync(
      blueprint_filepath,
      destination_filepath,
      {
        NAME: blueprint.name,
        CAMELIZED_NAME: camelizedName,
        CAPITALIZED_NAME: capitalizedName,
        DASHERIZED_NAME: dasherizedName,
        UNDERSCORED_NAME: underscoredName
      },
      options
    )
  })
}
