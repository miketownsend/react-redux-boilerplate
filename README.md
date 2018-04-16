# React Redux Boilerplate

A react/redux/webpack boilerplate application with scaffolding, styleguide, and tests

## Table of Contents
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Testing](#testing)
1. [Production Build](#production-builds)
1. [Styleguide](#styleguide)
1. [Scaffolding](#scaffolding)

## Requirements

* [node `^4.5.0`](https://nodejs.org/en/)

## Getting Started

Clone the repo
```bash
$ git clone https://github.com/miketownsend/neverbland-tvmaze.git
$ cd neverbland-tvmaze
```

Then, install the dependencies
```
$ npm install
```

Serve the web application with webpack using:
```
$ npm start
```

## Testing

```
// Run unit tests using Jest
$ npm test

// Run end to end tests using Cypress
& npm run integration_tests
```

## Production Build

```
// Run the build here
npm run build

// View the distribution build at http://localhost:3002 using:
npm run build:serve

```

## Styleguide
Generate a style guide using [Styleguidist](https://github.com/styleguidist/react-styleguidist).

Run the styleguide dev server (watches component library)

```
& npm run styleguide
```

[View the styleguide in the browser](http://localhost:3030)

Build the styleguide once (for CI)

```
$ npm run styleguide:build
```

## Scaffolding

The scaffolding is a simple + messy node script that is next on my list for improvement.
Blueprints of common patterns are provided for:

* component (component / styles / styleguide)
* container (container / styles)
* module (actions / constants / reducer / saga / selectors / tests)
* model (mock / transforms / test)
* route -- coming soon
* form -- coming soon

These can be generated from the command line using:

```
// Generate a new component/module/route
$ node blueprint <type> <name> --overwrite

// e.g.
$ node blueprint module ActivityScreen -o
$ node blueprint component UserIcon
$ node blueprint model schedule

// If you remove a generated module/component/route
// You can reset the sagas/routers/styles using...
$ node blueprint reset
```

## Roadmap

1. Fix tests
  a. jest --watch
  a. Add saga tests for /module/request
1. Improve scaffolding:
  1. Move scaffolding to use simple text replacement instead of preprocessor
  1. Add route scaffolding
  1. Add form scaffolding (deploy simple redux-form and form-container)
1. Move to JSS
1. Typescript (?)
1. Add base authentication module
1. Add base websocket module (start connection, receive RxJS observer)
1. Add to component library (find good 3rd party tools)
  a. Basic form components
  a. Rich autocomplete
  a. Menu + Navigation
  a. Loading states
