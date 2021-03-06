# ember-cli-promises-polyfill

[![Build Status](https://travis-ci.org/miguelcobain/ember-cli-promises-polyfill.svg?branch=master)](https://travis-ci.org/miguelcobain/ember-cli-promises-polyfill)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-promises-polyfill.svg)](https://emberobserver.com/addons/ember-cli-promises-polyfill)
[![npm version](https://badge.fury.io/js/ember-cli-promises-polyfill.svg)](https://badge.fury.io/js/ember-cli-promises-polyfill)

Ember-CLI addon to add a polyfill for the [`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
property, based on Ember's included RSVP.

Internet Explorer 11 and lower do not support `Promise`. 
See full [browser support details](https://caniuse.com/#feat=promises).

## Installation

```bash
ember install ember-cli-promises-polyfill
```

## Usage

The addon will import the polyfill by default to your `vendor.js`. 

The polyfill essentially assigns `window.Promise = Ember.RSVP.Promise;`, if your target browser does not have `window.Promise` defined.

Beginning with version 2.13 Ember CLI supports a [Targets](http://rwjblue.com/2017/04/21/ember-cli-targets/) feature, 
allowing you to specify the list of browsers your app should support like `last 1 Chrome versions` or `ie 11`.
If the [caniuse database](https://caniuse.com/#feat=promises) indicates that all browsers you want to support *fully* support the feature, then the 
polyfill will *not* be included into your build, to not increase your bundle size.

### Usage in an addon

This should also work as a nested addon of another addon, just include it as a `dependency`. So if your addon
makes use of `Promise`, you can use this to make sure the API is available. Given the above mentioned targets feature,
it will have no negative impact on the consuming app should the polyfill not be needed.

## Credits

This addon was inspired by a similar polyfill addon: https://github.com/kaliber5/ember-cli-classlist-polyfill

## License

This project is licensed under the [MIT License](LICENSE.md).
