'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const caniuse = require('caniuse-api');

function findHostShim() {
  let current = this;
  let app;
  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));
  return app;
}

module.exports = {
  name: require('./package').name,

  included() {
    if (this.shouldImportPolyfill()) {
      this._import('vendor/es6-promise/es6-promise.auto.js');
    }
  },

  // polyfill `this.import` if required
  _import(file) {
    if (typeof this.import === 'function') {
      this.import(file);
    } else {
      let app = findHostShim.call(this);
      app.import(file);
    }
  },

  treeForVendor() {
    let modulePath = path.dirname(require.resolve('es6-promise'));
    return new Funnel(modulePath, {
      destDir: 'es6-promise'
    });
  },

  shouldImportPolyfill() {
    let browsers = this.project.targets && this.project.targets.browsers;
    console.log(caniuse.isSupported('promises', browsers));
    return !browsers || !caniuse.isSupported('promises', browsers);
  }
};
