const path = require('path')

module.exports = {
  setupTestFrameworkScriptFile: path.join(__dirname, 'tests', 'jest.setup.js'),
  collectCoverage: false,
  coverageDirectory: './reports/',
  coverageReporters: ['json', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.js',
    '!src/store/**'
  ],
  testMatch: [
    path.join(__dirname, 'src', '**', '*.spec.js'),
    path.join(__dirname, 'emulator', '**', '*.spec.js')
  ],
  watchPathIgnorePatterns: [
    '/node_modules/',
    '/blueprint/',
    '/reports/',
    '/styleguide/',
    '/dist/',
    '/cypress/'
  ]
}
