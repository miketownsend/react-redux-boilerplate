const path = require('path')

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  ignore: [
    '**/__tests__/**',
    '**/*.spec.js',
    '**/*.i18n.js',
    '**/*.scss'
  ],
  require: [
    path.join(__dirname, 'src/styles/core.scss')
  ]
}
