/* eslint-env node, mocha */
'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-fs'));
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('Include polyfill', function() {
  this.timeout(400000);

  let app;

  before(async function() {
    app = new AddonTestApp();
    await app.create('included');
    await app.runEmberCommand('build');
  });

  it('includes polyfill for IE', async function() {
    expect(app.filePath('dist/assets/vendor.js')).to.have.content.that.match(/window\.Promise = Ember\.RSVP\.Promise;/);
  });
});
