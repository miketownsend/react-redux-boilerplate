const fs = require('fs')
const path = require('path')
const { lstatSync, readdirSync } = require('fs')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => {
  return readdirSync(source).map(name => path.join(source, name)).filter(isDirectory)
}

module.exports = {
  isDirectory,
  getDirectories
}
