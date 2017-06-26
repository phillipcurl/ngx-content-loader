# ngx-content-loader
[![Build Status](https://travis-ci.org/phillipcurl/ngx-content-loader.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-content-loader)
[![codecov](https://codecov.io/gh/phillipcurl/ngx-content-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/phillipcurl/ngx-content-loader)
[![npm version](https://badge.fury.io/js/ngx-content-loader.svg)](http://badge.fury.io/js/ngx-content-loader)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-content-loader/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-content-loader?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-content-loader.svg)](https://github.com/phillipcurl/ngx-content-loader/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-content-loader.svg)](https://github.com/phillipcurl/ngx-content-loader/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-content-loader/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-content-loader/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

A collection of Angular components to use as placeholders when loading content

## Installation

Install through npm:
```
npm install --save ngx-content-loader
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { ContentLoaderModule } from 'ngx-content-loader';

@NgModule({
  imports: [
    ContentLoaderModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-content-loader/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-content-loader/bundles/ngx-content-loader.umd.js"></script>
<script>
    // everything is exported ngxContentLoader namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://phillipcurl.github.io/ngx-content-loader/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and <% if (isYarnAvailable) { %>[yarn](https://yarnpkg.com/en/docs/install)<% } else { %>NPM<% } %>
* Install local dev dependencies: `<% if (isYarnAvailable) { %>yarn<% } else { %>npm install<% } %>` while current directory is this repo

### Development server
Run `<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> test` to run tests once or `<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
<% if (isYarnAvailable) { %>yarn<% } else { %>npm<% } %> run release
```

## License

MIT
