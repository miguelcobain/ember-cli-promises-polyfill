/* eslint-env node, mocha */
'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-fs'));
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('Exclude polyfill', function() {
  this.timeout(400000);

  let app;

  before(async function() {
    app = new AddonTestApp();
    await app.create('excluded');
    await app.runEmberCommand('build');
  });

  it('skips polyfill for modern browsers', async function() {
    expect(app.filePath('dist/assets/vendor.js')).to.not.have.content.that.match(/window\.Promise = Ember\.RSVP\.Promise;/);
  });
});
